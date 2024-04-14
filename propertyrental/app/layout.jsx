import React from 'react';
import '@/assets/styles/global.css'
import '@/components/Navbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: 'PropertyRent | Find the Perfect Home',
    description: 'Find your dream rental property',
    keywords: 'rental,find rentals,find properties'
}


const MainLayout = ({ children }) => {

    return (
        <AuthProvider>
            <html lang='en'>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    )

}



export default MainLayout