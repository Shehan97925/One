
import './App.css'
import Header from './Component/Header/Header'
import Body from './Component/Body/Body'
import AdxItm from './AdxItm'
import News from './News'
import Footer from './Component/Footer/Footer'


function App() {


  return (
    <>
      <Header />
      <Body>

        <div className='loop-gif'>
          <div className='home-content'>
            <div className='slogan'>
              <p>We are <span className='highlight'>SATISFYING</span></p>
              <p>Your</p>
              <p className='highlight'>REQUIRMENT</p>

            </div>
          </div>
        </div>

        <div className='second-content'>
          <div className='content-topic'>
            <h2>Who we are?</h2>
          </div>
          <div className='content-text1'>
            <p>"Elevate your online presence and propel your business to new heights with our comprehensive suite of digital services.
              At Addvotex, we specialize in crafting bespoke digital marketing strategies tailored to your unique needs. From enhancing your
              brand's visibility through strategic social media management to creating captivating graphic designs that leave a lasting impression,
              we're dedicated to helping you achieve your online goals. With our team of experts at the helm, you can trust us to navigate the
              digital landscape and drive meaningful results for your business." </p>
          </div>
        </div>

        <div className='third-content'>
          <div className='third-topic'>
            <h2>Why Want Addvotex</h2>
          </div>
          <div className='content-text2'>
            <p>"Our technology and industry experts share knowledge on tackling today’s business and digital transformation challenges.
              Get key tips and insights to inspire new thinking, avoid pitfalls and drive higher results. Unlock the insights and
              expertise needed to navigate the complexities of modern business and digital transformation with our team of technology and
              industry experts. Explore a wealth of valuable tips, strategies, and insights to inspire innovative thinking, steer clear of
              common pitfalls, and achieve superior results."</p>
          </div>
          <div>
            <AdxItm></AdxItm>
          </div>
        </div>

        <div className='fourth-content'>
          <div className='fourth-topic'>
            <h2>News</h2>
          </div>
          <div>
            <News></News>
          </div>
        </div>
        
      </Body>
      <Footer />
    </>
  )
}

export default App
