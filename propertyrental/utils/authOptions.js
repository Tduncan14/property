import GoogleProvider from 'next-auth/providers/google'
import connectDB from '@/config/database'
import User from '@/models/User'



export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }

        })
    ],
    callbacks: {
        //Invoked on successful signin

        async signIn({ profile }) {
            // connect to the database
            await connectDB();

            const userExist = await User.findOne({ email: profile.email })
            // check if the user exist
            if (!userExists) {
                //truncate user name if too long

                const userName = profile.name.slice(0, 20);


                // if not, add user to the database

                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                })
            }

            // Return true to allow the sign in

            return true
        }
    },

    // modifies the session object

    async session({ session }) {
        // Get user from the database
        // assign the user id to the session 
        // return session
    }
}