import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import '../styles/main.scss'
const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
export default Layout