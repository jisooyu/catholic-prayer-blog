import React from 'react';
import CarouselComponent from '../components/CarouselComponent'

const Luminous = ({ prePrayer, prayers, postPrayers }) => {

    return (
        <CarouselComponent prePrayer={prePrayer} prayers={prayers} postPrayers={postPrayers} />
    )
};

export default Luminous;
