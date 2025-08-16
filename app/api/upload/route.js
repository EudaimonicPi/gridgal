import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { Card, genCard } from '@/models/Card';
import { connectDB } from '@/utils/dbFns/databaseFn';
import { IMAGE_DEFAULT } from '@/utils/constants';

// Disable default body parsing so formidable can read multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (request, { params }) => {
  try {
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const form = new formidable.IncomingForm({ uploadDir, keepExtensions: true });

    // Parse the incoming form (file + other fields)
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(request, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    // Extract card info from form fields
    const cardInfo = JSON.parse(fields.cardInfo); // sent as JSON string
    const file = files.file; // the uploaded image

    // Compute the image path to store in MongoDB
    const imagePath = file ? `/uploads/${path.basename(file.filepath)}` : cardInfo.image || null;

    const card = genCard(
      cardInfo.title,
      cardInfo.author,
      cardInfo.description,
      imagePath,
      cardInfo.authorImage || IMAGE_DEFAULT,
      'pending'
    );

    await connectDB();
    const newCard = await Card.create(card);

    return new Response(JSON.stringify({ success: true, card: newCard }), { status: 200 });
  } catch (err) {
    console.error('Error creating card:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
