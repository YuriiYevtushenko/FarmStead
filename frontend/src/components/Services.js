import React from 'react'
import first from '../images/services_first.jpg'
import second from '../images/services_second.jpg'
import third from '../images/services_third.jpg'
const Services = () => {
    return (
        <>
            <section className='services'>
                <div className='services__inner'>

                <span className='services__title'>What we do</span>
                <div className='services__desc'>
                    <span className='services__text-background'>Services</span>
                    <div className='services__desc__left'>
                        <span className='services__text'>Why Choose Our Fresh</span>
                        <span className='services__text'> Organice Foods</span>
                    </div>
                    <div className='services__desc__right'>
                        <span className='services__text-desc'> Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque, eaque ipsa quae ab illo inventore.Sed ut perspiciatis unde omnis iste natus error sit.  </span>
                    </div>
                </div>
                    <div className='services__content'>
                        <div className='services__block'>
                            <img src={first} className='services__block__image' alt='s'/>
                            <div className='services__block__container'>
                                <span className='services__block__text-green'>Natural</span>
                                <span className='services__block__title'>Agriculture Products</span>
                                <span className='services__block__text'>Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium, totam rem aperiam</span>
                            </div>
                        </div>
                        <div className='services__block'>
                            <img src={second} className='services__block__image' alt='s'/>
                            <div className='services__block__container'>
                                <span className='services__block__text-green'>Fresh Vegetables</span>
                                <span className='services__block__title'>Agriculture Products</span>
                                <span className='services__block__text'>Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium, totam rem aperiam</span>
                            </div>
                        </div>
                        <div className='services__block'>
                            <img src={third} className='services__block__image' alt='s'/>
                            <div className='services__block__container'>
                                <span className='services__block__text-green'>Organic Products</span>
                                <span className='services__block__title'>Agriculture Products</span>
                                <span className='services__block__text'>Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium, totam rem aperiam</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services