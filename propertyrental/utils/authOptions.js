import GoogleProvider from 'next-auth/providers/google'



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
            // check if the user exist
            // if not, add user to the database
            // Return true to allow the sign in
        }
    },

    // modifies the session object

    async session({ session }) {
        // Get user from the database
        // assign the user id to the session 
        // return session
    }
}