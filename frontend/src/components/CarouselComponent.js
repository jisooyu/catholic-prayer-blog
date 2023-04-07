import Carousel from 'react-material-ui-carousel'
import Prayer from './Prayer';
import PrePrayer from './PrePrayer';

const CarouselComponent = ({ prePrayer, prayers }) => {
    return (
        <Carousel
            animation="fade"
            interval={null}
            swipe={false}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <PrePrayer prePrayer={prePrayer} />
            {prayers.map((prayer, id) => (
                <Prayer key={id} prayer={prayer} />
            ))}
            {/* 여기에 PostPrayer ? */}
        </Carousel>
    )
}

export default CarouselComponent;