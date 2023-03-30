import Carousel from 'react-material-ui-carousel'
import Prayer from './Prayer';
import PrePrayer from './PrePrayer';

const CarouselComponent = ({ prayers, prePrayer }) => {
    return (
        <Carousel
            animation="fade"
            interval={null}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F7E7E7'
            }}
        >
            <PrePrayer prePrayer={prePrayer} />
            {prayers.map((prayer, id) => (
                <Prayer key={id} prayer={prayer} />
            ))}
        </Carousel>
    )
}

export default CarouselComponent;