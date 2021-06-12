import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='footer__inner'>
                    <div className='footer__block'>
                        <span className='footer__title'>Find Us</span>
                        <span className='footer__text'>Address: 10001 Alleghany st, 5th Avenue, 235 Terry, London.</span>
                        <span className='footer__text'>Phone: +12 23456790</span>
                        <span className='footer__text'>Email: info@example.com</span>
                        <span className='footer__text'>Fax: + 11 367 21890</span>
                    </div>
                    <div className='footer__block'>
                        <span className='footer__title'>Farmstead</span>
                        <span className='footer__text'>Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui. </span>
                        <span className='footer__text footer__text--copyright'>© 2021 Farmstead. All Rights Reserved | WordPress Theme by W3Layouts. </span>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer