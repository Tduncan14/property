import React from 'react';
import '@/assets/styles/global.css'
import '@/components/Navbar';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'PropertyRent | Find the Perfect Home',
    description: 'Find your dream rental property',
    keywords: 'rental,find rentals,find properties'
}


const MainLayout = ({ children }) => {

    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )

}



export default MainLayout