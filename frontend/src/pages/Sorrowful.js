import React from 'react';
import CarouselComponent from '../components/CarouselComponent'

const Sorrowful = ({ prePrayer, prayers, postPrayers }) => {

    return (
        <CarouselComponent prePrayer={prePrayer} prayers={prayers} postPrayers={postPrayers} />
    )
};

export default Sorrowful;
