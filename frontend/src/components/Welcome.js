import React, {useEffect, useState} from 'react'
import logo1 from '../images/header-slider1.jpg'
import logo2 from '../images/header-slider2.jpg'
import logo3 from '../images/header-slider3.jpg'
const Welcome = () => {
    const [slider, setSlider] = useState(1)
    const [sliderClass,setSliderClass]=useState('welcome__slider__images')
    const [radio, setRadio] = useState(1)
    useEffect(()=>{
        setTimeout(()=>{
            if(slider===1)setSlider(2)
            if(slider===2)setSlider(3)
            if(slider===3)setSlider(1)

        },10000)}
    ,[])
    useEffect(()=>{
        if(slider===1){
            setSliderClass('welcome__slider__images')
            setRadio(1)
        }
        if(slider===2){
            setSliderClass('welcome__slider__images welcome__slider__images--second')
            setRadio(2)
        }
        if(slider===3){
            setSliderClass('welcome__slider__images welcome__slider__images--third')
            setRadio(3)
        }
        },[slider])
    return (
        <>
            <section className='welcome'>
                <div className='welcome__content'>
                    <span className='welcome__title'>Welcome to Farmstead</span>
                    <span className='welcome__title'>where Natural Food is born!</span>
                    <span className='welcome__desc'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. </span>
                    <button className='welcome__button'>LEARN MORE</button>
                </div>
                <div className='welcome__slider'>

                    <div className='welcome__slider__overflow'>
                        <div className={sliderClass}>
                            <div style={{backgroundImage:`url(${logo1})`}}  className='welcome__slider__image'/>
                            <div  style={{backgroundImage:`url(${logo2})`}}  className='welcome__slider__image'/>
                            <div  style={{backgroundImage:`url(${logo3})`}}  className='welcome__slider__image'/>
                        </div>
                        <div className='welcome__slider__fake-radio'>
                            <input type='button'   onClick={e=>{setSlider(1)}} className={radio===1?'welcome__slider__label welcome__slider__label--active':'welcome__slider__label'}/>
                            <input type='button'   onClick={e=>{setSlider(2)}} className={radio===2?'welcome__slider__label welcome__slider__label--active':'welcome__slider__label'}/>
                            <input type='button'  onClick={e=>{setSlider(3)}} className={radio===3?'welcome__slider__label welcome__slider__label--active':'welcome__slider__label'}/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Welcome
