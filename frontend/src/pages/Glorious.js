import React from 'react';
import CarouselComponent from '../components/CarouselComponent'

const Glorious = ({ prePrayer, prayers, postPrayers }) => {

    return (
        <CarouselComponent prePrayer={prePrayer} prayers={prayers} postPrayers={postPrayers} />
    )
};

export default Glorious;
