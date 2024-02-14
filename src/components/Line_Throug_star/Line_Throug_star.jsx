import React from 'react'
import styles from './Line_Throug_star.module.css'

export default function LineThrougStar() {
  return (
    <>
    <hr className={`${styles.hr}  mx-auto border border-2 border-white opacity-100 mt-3 d-block `}/>
            <div className=' star-icon position-relative'>
              <div className={`${styles.star} mx-auto position-absolute start-50 translate-middle pb-4 `}>
                <i className='fa-solid fa-star text-white position-absolute translate-middle bg-main px-3 pb-1'></i> 
              </div>
            </div>
    </>
  )
}
