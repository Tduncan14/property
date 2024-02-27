import React from 'react';
import Link from 'next/Link';
import properties from '@/properties.json';

const PropertyPage = () => {



    return (
        <section classNameName="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {properties.length === 0 ? (
                    <>No Properties are found</>
                ) : <div className="grid grid-cols-1 md-grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <div>
                            {property.name}
                        </div>
                    ))}
                </div>}

            </div>
        </section>

    )


}


export default PropertyPage