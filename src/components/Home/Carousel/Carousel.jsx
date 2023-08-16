import './Carousel.css';
import { images, names } from '../../utils/utils'

const Carousel = () => {

    const imagesWithDuplicates = images.concat(images, images);

    return(
        <section id='skills'>
        <h1>Habilidades</h1>
        <div className="slider">
            <div className="slide-track">
                {imagesWithDuplicates.map((image, index) => (
                <div className="slide" key={index}>
                    <div className="image-carousel">
                        <img src={image} alt="" />
                        <h1>{names[index % names.length]}</h1>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Carousel;