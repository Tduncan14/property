import react from 'react';
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import connectDB from '@/config/database';
// export const metadata = {
//     title: 'Homepage'
// }


const HomePage = () => {




    return <>
        <Hero />
        <InfoBoxes />
        <HomeProperties />

    </>

}


export default HomePage