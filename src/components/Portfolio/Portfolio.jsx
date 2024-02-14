import React, { useEffect, useState } from 'react'
import styles from './portfolio.module.css'
import tent from '../../assists/images/tent.png'
import house from '../../assists/images/house.png'
import cake from '../../assists/images/cake.png'
import SectionHeader from '../Section-Header/Section-Header'
export default function Portfolio() {


  const [src , setSrc] = useState("")

  useEffect(()=>{
    let projects = document.querySelectorAll(".project")
    
    for(let i = 0; i < projects.length; i++) {
      projects[i].addEventListener("click",function()  {
        setSrc(this.children[0].src)
        document.querySelector("#details").classList.remove("d-none")
      })
    }

    document.querySelector("#details").addEventListener("click",function(e)  {
      document.querySelector("#details").classList.add("d-none")
    })
    document.querySelector("#details img").addEventListener("click",function(e)  {
      e.stopImmediatePropagation()
    })

  })



  return (
    <>

        <div className="bg-white position-absolute top-0 bottom-0 start-0 end-0 z-n1"></div>

        <div id='details' className="d-none details bg-primary bg-opacity-50 d-flex justify-content-center align-items-center position-fixed  top-0 bottom-0 start-0 end-0 z-3"> 


          <div className="container">
            <div className="inner w-50 mx-auto ">
              <img src={src} alt="" className='w-100'/>
            </div>
          </div>
        </div>


        <section id="portfolio" className='text-center bg-white  py-5 '>
          <div className="container ">

            <SectionHeader h1 = 'protfolio component'/>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-start px-5  gy-4 mt-1">

            <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={house} alt="house" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >zom
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={cake} alt="cake" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >zom
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}> 
                  <img className='w-100 ' src={tent} alt="tent" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >zom
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={house} alt="house" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >zom
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={cake} alt="cake" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >zom
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={tent} alt="tent" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >zom
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
