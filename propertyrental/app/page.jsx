import react from 'react';
import Link from 'next/Link';
// export const metadata = {
//     title: 'Homepage'
// }


const HomePage = () => {



    return <div>
        <h1 className="text-3xl">Welcome</h1>
        <Link href="/properties">Show properties</Link>
    </div>

}


export default HomePage