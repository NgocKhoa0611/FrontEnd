import React from "react"
import "./Home.css"
import bannerImage from "../assets/images/Fashionvers.png";

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          {/* Banner Image */}
          <div className='banner'>
            <img src={bannerImage} alt='Banner' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
