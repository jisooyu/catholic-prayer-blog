import Carousel from 'react-material-ui-carousel'
import Prayer from './Prayer';
import PrePrayer from './PrePrayer';
import PostPrayer from './PostPrayer'

const CarouselComponent = ({ prePrayer, prayers, postPrayers }) => {
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
            {postPrayers.map((postPrayer, id) => (
                <PostPrayer key={id} postPrayer={postPrayer} />
            ))}
        </Carousel>
    )
}

export default CarouselComponent;