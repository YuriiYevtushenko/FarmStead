import React from 'react'
import image from '../images/experience-image.jpg'
import house from '../images/features_house.png'
import daire from '../images/feature_daire.png'
import organic from '../images/about-organic.png'
import lamp from '../images/feature_lamp.png'
import wood from '../images/feature_wood.png'
import farm from '../images/feature_farm.png'
const Experience = () => {
    const features_desc='Ras effic itur metusga via suscipit consectetur adipisicing unde omnis.'
    return (
        <>
            <section className='experience'>
                <div className='experience__inner'>
                    <div className='experience__left'>
                        <span className='experience__text'>Why choose us</span>
                        <span className='experience__title'>Quality food is the most</span>
                        <span className='experience__title experience__title--last'>   important thing in our life</span>
                        <span className='experience__desc'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.</span>
                    </div>
                    <div className='experience__right'>
                        <img src={image} className='experience__right__image' alt='s'/>
                        <div className='experience__right__info'>36+ <p className='experience__right__info-small-text'>years of experience</p></div>
                    </div>
                </div>
            </section>
            <section className='features'>
                <div className='features__inner'>
                    <div className='features__block'>
                        <img src={house} alt='s' className='features__image'/>
                        <div className='features__content'>
                            <span className='features__title'>Agriculture</span>
                            <p className='features__desc'>{features_desc}</p>
                        </div>
                    </div>
                    <div className='features__block'>
                        <img src={wood} alt='s' className='features__image'/>
                        <div className='features__content'>
                            <span className='features__title'>Fresh</span>
                            <p className='features__desc'>{features_desc}</p>
                        </div>
                    </div>
                    <div className='features__block'>
                        <img src={lamp} alt='s' className='features__image'/>
                        <div className='features__content'>
                            <span className='features__title'>Natural</span>
                            <p className='features__desc'>{features_desc}</p>
                        </div>
                    </div>
                    <div className='features__block'>
                        <img src={farm} alt='s' className='features__image'/>
                        <div className='features__content'>
                            <span className='features__title'>Farm</span>
                            <p className='features__desc'>{features_desc}</p>
                        </div>
                    </div>
                    <div className='features__block'>
                        <img src={organic} alt='s' className='features__image'/>
                        <div className='features__content'>
                            <span className='features__title'>Organic</span>
                            <p className='features__desc'>{features_desc}</p>
                        </div>
                    </div>
                    <div className='features__block'>
                        <img src={daire} alt='s' className='features__image'/>
                        <div className='features__content'>
                            <span className='features__title'>Dairy</span>
                            <p className='features__desc'>{features_desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Experience