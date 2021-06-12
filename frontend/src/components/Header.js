import React, {useEffect, useState} from 'react'
import '../styles/main.scss'
import image from '../images/header_search.png'
const Header = () => {
    const [search,setSearch]=useState(false)
    const [scroll, setScroll] = useState(false)
    useEffect(() => {

            window.addEventListener("scroll",()=>{
                if (window.scrollY === 0) {
                    setScroll(false)
                }
                if(window.scrollY!==0){
                    setScroll(true)
                }
            })


    }, []);

    return (
        <>
            <section className={scroll?'header header--visible':'header'}>
                <div className='header__inner'>
                    <span className={scroll?'header__title header__title--visible':'header__title'}>Farmstead</span>
                        <div className='header__menu'>
                            <input type='search' className={!search?'header__search':'header__search header__search--open'} onClick={e=>setSearch(!search)} placeholder='search' onBlur={e=>setSearch(!search)} style={{backgroundImage: `url(${image})`}}/>
                        </div>
                </div>

            </section>


        </>
    )
}
export default Header