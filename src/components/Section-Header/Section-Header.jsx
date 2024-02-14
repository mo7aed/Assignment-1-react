import React from 'react'
import styles from './Section-Header.module.css'

export default function SectionHeader({h1}) {

  return (<>
  
  <header className=' mx-auto text-center'>
              <h1 className=' text-uppercase fw-bold text-mid'>{h1}</h1>
              <hr className={`${styles.borderMid} ${styles.hr} mx-auto border border-2 border-mid opacity-100 mt-3 d-block`} />
              <div className=' star-icon position-relative'>
                <div className={`${styles.star}  mx-auto   position-absolute start-50 translate-middle pb-4`} >
                  <i className='fa-solid fa-star text-mid position-absolute translate-middle bg-white px-3 pb-1'></i> 
                </div>
              </div>
            </header>
  </>
  )
}
