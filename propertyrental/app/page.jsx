import react from 'react';
import Link from 'next/Link';
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
// export const metadata = {
//     title: 'Homepage'
// }


const HomePage = () => {

    console.log(process.env.MONGODB_URI);



    return <>
        <Hero />
        <InfoBoxes />
        <HomeProperties />

    </>

}


export default HomePage