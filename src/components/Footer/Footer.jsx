import React from 'react'
import styels from './Footer.module.css'

export default function Footer() {
  return (<>
  <footer className='bg bg-'>

  <div className="prefotter text-white bg-mid py-5">
    <div className="container">
      <div className="row row-cols-1  row-cols-lg-3 text-center">

        <div className="col  py-4">
          <h3 className='text-uppercase'>LOCATION</h3>
          <p className='text-capitalize mb-1'>Kafr El-Sheikh , desuk</p>
          <p className='text-capitalize'>egypt , Kafr El-Sheikh</p>
        </div>

        <div className="col py-4">
            <h3 className='text-uppercase'>AROUND THE WEB</h3>
            <div className="icons">
              <div className="container">
                <div className="row justify-content-center d-flex row-cols-4  mx-auto">
                    <div className={`${styels.icon}`}>
                      <a href="https://www.facebook.com/profile.php?id=100028438295915" target="_blank" rel="noopener noreferrer" className='text-decoration-none text text-info'>
                        <div className={`${styels.inner}`}>
                        <i class="fa-brands fa-facebook"></i>
                        </div>
                      </a>  
                    </div>
                    <div className={`${styels.icon}`}>
                      <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" className='text-decoration-none text text-info'>
                        <div className={`${styels.inner}`}>
                        <i className='fa-brands fa-twitter'></i>
                        </div>
                      </a>
                    </div>
                    <div className={`${styels.icon}`}>
                      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text text-info'>
                        <div className={`${styels.inner}`}>
                        <i className='fa-brands fa-linkedin-in '></i>
                        </div>
                      </a>
                    </div>
                    <div className={`${styels.icon}`}>
                    <a href="     https://github.com/mohame2.git" target="_blank" rel="noopener noreferrer" className='text-decoration-none text text-info'>
                      <div className={`${styels.inner}`}>
                      <i className='fa-solid fa-globe'></i>
                      </div>
                    </a>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col py-4">
          <h2>ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  </div>

  <div className='py-4 text-center text-white bg-dark text-capitalize'>copyright &copy; Mohamed samir 2024</div>

  </footer>

    
  </>
  )
}
