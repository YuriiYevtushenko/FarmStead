import React from 'react'
import wood from '../images/about__wood.png'
import organic from '../images/about-organic.png'
import cultivation from '../images/about-cultivation.png'
import track from '../images/about-track.png'
const AboutUs = () => {
    return (
        <>
            <section className='about'>
                <div className='about__inner'>
                    <div className='about__container'>
                        <span className='about__text'>Grow Naturally</span>
                        <span className='about__title'>Leaders in the field</span>
                        <span className='about__desc'>Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit amet laoreet elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum. </span>
                        <button className='about__button'>Discover more</button>
                    </div>
                    <div className='about__blocks'>
                        <div className='about__block'>
                            <img src={wood} alt='wood' className='about__block__image'/>
                            <span className='about__block__text'>NaturalProducts</span>
                        </div>
                        <div className='about__block'>
                            <img src={cultivation} alt='wood' className='about__block__image'/>
                            <span className='about__block__text'>Wheat Cultivation</span>
                        </div>
                        <div className='about__block'>
                            <img src={track} alt='wood' className='about__block__image'/>
                            <span className='about__block__text'>Modern Truck</span>
                        </div>
                        <div className='about__block'>
                            <img src={organic} alt='wood' className='about__block__image'/>
                            <span className='about__block__text'>Organic Product</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs