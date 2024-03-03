'use client'
import { useState} from 'react';
import CardView from '@/components/card/postcard'
import ModalView from '@/components/modals/moreModal'
import Image from '@/public/vercel.svg'


export default function CardComponent(props) {
     const [show, setShow] = useState(false)

     // these woul somehow be grabbed from a db or someodd
    const heading = "Grid title"
    const author = "author"
    const description = "This is the grid description" 
    const image = Image.src //have to src based on how i imported
    const cardT = {
            title: heading,
            author,
            description, 
            image
        } 

    function createCard(card=cardT) {
        return { 
            title: card.title, 
            author: card.author, 
            description: card.description,
            image: card.image
        }
    }

    

    return (
        <div>
            <ModalView setShow={setShow} show={show}/>
            <CardView setShow={setShow} card={createCard(props.card)} />
        </div>



    
)}