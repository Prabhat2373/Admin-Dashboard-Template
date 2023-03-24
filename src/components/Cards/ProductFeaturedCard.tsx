import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface ProductCardProps {
    image: string;
    title: string;
    ratings: number;
    price: string | number;
}
const ProductFeaturedCard = ({
    image,
    title,
    ratings,
    price,
}: ProductCardProps) => {
    return (
        <div className="flex w-full gap-4">
            <div className='bg-disabled rounded-xl'>
                <img src={image} width={'100px'} alt={`product ${Math.random()}`} />
            </div>
            <div className='flex'>
                <div className='flex flex-col justify-between'>
                    <h1 className="text-text-primary text-lg">{title}</h1>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((el) => {
                            return (
                                <React.Fragment>
                                    {el <= ratings ? (
                                        <StarIcon fill="#000000" />
                                    ) : (
                                        <StarIcon fill="#ffffff" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                    <h3>$ {price}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductFeaturedCard;
