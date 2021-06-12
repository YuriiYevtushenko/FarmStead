import React from 'react'
import carrot from '../images/gallery_carrots.jpg'
import strawb from '../images/gallery_strawberry.jpg'
import farm from '../images/gallery_farm.jpg'
import apples from '../images/gallery_apples.jpg'
import fields from '../images/gallery_fields.jpg'
import grapes from '../images/gallery_grapes.jpg'
import papper from '../images/gallery_papper.jpg'
const Gallery = () => {
    const gallery=[{src:carrot,desc:'Fresh Carrots'},
        {src:strawb,desc:'Strawberry'},
        {src:farm,desc:'Our Farm'},
        {src:apples,desc:'Fresh Apples'},
        {src:fields,desc:'Awesome Fields'},
        {src:grapes,desc:'Fresh Grapes'},
        {src:papper,desc:'Hot Papper'},]
    return (
        <>
            <section className='gallery'>
                <div className='gallery__inner'>
                    <div className='gallery__block'>
                        <span className='gallery__text'>Gallery</span>
                        <span className='gallery__title'>Our Products </span>
                        <span className='gallery__desc'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo.</span>
                        <button className='gallery__button'>Discover More</button>
                    </div>
                    {gallery.map((item,index)=>(
                        <div key={index} className='gallery__block'>
                            <img src={item.src} className='gallery__image'/>
                            <span className='gallery__name'>{item.desc}</span>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}
export default Gallery