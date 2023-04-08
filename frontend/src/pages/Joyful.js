import React from 'react';
import CarouselComponent from '../components/CarouselComponent'

const Joyful = ({ prePrayer, prayers, postPrayers }) => {
    return (
        <CarouselComponent prePrayer={prePrayer} prayers={prayers} postPrayers={postPrayers} />
    )
};

export default Joyful;
