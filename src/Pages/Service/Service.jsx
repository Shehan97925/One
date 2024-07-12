import React from 'react'
import Header from '../../Component/Header/Header'
import Body from '../../Component/Body/Body'
import './Service.css'
import Footer from '../../Component/Footer/Footer'
import ServiceSection from './ServiceSection';
import logo from '../../assets/companyLogos/comp1.jpg'
import PackageItem from './PackageItem'
import Graphic from './Graphic'


function Service() {
  // const organizations = [
  //   { logo: 'comp1.jpg' , alt: 'companyLogos Logo 1' } // Replace with your logo image paths and alt text
  //   // { logo: 'logo2.png', alt: 'Organization Logo 2' },
  //   // { logo: 'logo3.png', alt: 'Organization Logo 3' },
  //   // Add more logos as needed
  // ];
  return (
    <>
      <Header />
      <Body>
        <div>
          <div className='body-content'>
            <div className='main-contain'>
              <div className='one-two'>
                  <div className='fist-cont'>
                    <div className='header-topic'>
                      services by addvotex
                    </div>
                    <div className='text'>
                      <p>"Discover a comprehensive suite of services tailored to drive your business forward.
                        At Addvotex, we specialize in crafting dynamic marketing campaigns, managing your social
                        media presence with finesse, delivering stunning graphic designs, and developing cutting-edge
                        web and mobile applications. With our expert team by your side, you'll unlock new opportunities
                        for growth and innovation."</p>
                    </div>
                  </div>

                  <div>
                    <div className='service-container'>
                      <div className='container-input'>
                        {/* <ServiceLink/> */}
                        <ServiceSection />
                      </div>
                    </div>
                  </div>
              </div>
              
              <div className='package-content'>
                <div>
                  <p className='header-topic'>social media packages</p>
                </div>
                <div>
                  <PackageItem />
                </div>
              </div>

              <div className='graphic-content'>
                <div>
                  <p className='header-topic'>graphic design</p>
                </div>
                <div className='graphic-items'>
                  <Graphic />
                </div>
              </div>
             
            </div>
          </div>
        </div>

      </Body>
      <Footer />
    </>

  )
}

export default Service