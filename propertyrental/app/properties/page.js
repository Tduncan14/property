import React from 'react';
import Link from 'next/Link';
import properties from '@/properties.json';
import PropertyCard from '@/components/PropertyCard';

const PropertyPage = () => {



    return (
        <section classNameName="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {properties.length === 0 ? (
                    <>No Properties are found</>
                ) : <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {properties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>}

            </div>
        </section>

    )


}


export default PropertyPage