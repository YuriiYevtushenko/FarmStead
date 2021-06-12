import * as React from "react"
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Gallery from "../components/Gallery";




const IndexPage = () => {
  return (
      <Layout>
          <Welcome/>
          <AboutUs/>
          <Services/>
          <Experience/>
          <Gallery/>
      </Layout>
  )
}

export default IndexPage
