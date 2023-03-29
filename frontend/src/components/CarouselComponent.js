import Carousel from 'react-material-ui-carousel'
import Prayer from './Prayer';
import PrePrayer from './PrePrayer';

const CarouselComponent = ({ prayers, prePrayer }) => {
    return (
        <Carousel
            animation="fade"
            interval={null}
            sx={{
                height: '150vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'top',
                justifyContent: 'center',
                backgroundColor: 'yellow'
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