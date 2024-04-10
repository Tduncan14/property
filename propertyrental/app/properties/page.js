
// import Link from 'next/Link';
// import properties from '@/properties.json';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/request';



// async function fetchProperties() {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);


//         if (!res.ok) {
//             throw new Error('failed to fetch data')
//         }

//         console.log(res)
//         return res.json()

//     }
//     catch (error) {
//         console.log(error);
//     }
// }



const PropertyPage = async () => {

    const properties = await fetchProperties();
    // set the properties


    properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))


    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {properties.length === 0 ? (
                    <>No Properties are found</>
                ) : <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {properties.map((property) => (<PropertyCard key={property._id} property={property} />))}
                </div>}

            </div>
        </section>

    )


}


export default PropertyPage