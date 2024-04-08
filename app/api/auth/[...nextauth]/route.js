import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'; //prodiver
// look at CredentialsProviders (customize form
// CredentialsProviders)
const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    session: {
    strategy: 'jwt', //what's this? 
    },
};
// key line bc of my app structure
// LOL HAVE TO DO POST REQUEST TOO WOO WOO 
export const GET = NextAuth(authOptions)
export const POST = NextAuth(authOptions)