import react from 'react';
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import connectDB from '@/config/database';
// export const metadata = {
//     title: 'Homepage'
// }


const HomePage = async () => {


    console.log(process.env.MONGODB_URI);

    await connectDB();



    return <>
        <Hero />
        <InfoBoxes />
        <HomeProperties />

    </>

}


export default HomePage