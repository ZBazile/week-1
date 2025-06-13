import React from 'react'
import styles from "./Card.module.css"
function Card( { heading , image, url


}) {
  return (
    <div>
        <div className={styles.card}>
      <h1>{heading}</h1>
      <img width =' 150px' height = '150px' src={`${image}`} alt="" />
      <p> Watch the highlights here! </p>
      <a href = {`${url}`} ><button> Watch Now!  </button></a>
   
          </div>


    </div>
  )
}

export default Card
