import React from 'react'
import mohamed from '../../assists/images/mohamed samir.svg'
import LineThrougStar from '../Line_Throug_star/Line_Throug_star';
import styles from './Home.module.css';


export default function Home() {
  return (
    <>
        <section className=' bg-main  '>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row row-cols-1">
            <div className="w-25 mx-auto mt-5">
              <img src={mohamed} alt="mohamed" className={`${styles.mohamed} w-100 rounded-circle border `} />
            </div>
            <h1 className='text-center mt-3 text-white text-uppercase'>start framework</h1>
            <LineThrougStar/>
            <div className="text text-white mb-5  text-center">
            <p>Graphic Desigenar - Web Designer </p>
            </div>
            </div>
          </div>
        </section>
    </>
  )
}
