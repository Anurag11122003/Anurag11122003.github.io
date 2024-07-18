import React from 'react'
import{Link} from "react-router-dom"
import {FaFacebook, FaYoutube} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <>
      <footer>
        <Link to={""}>
            <FaYoutube/>
        </Link>
        <Link to={"https://www.linkedin.com/in/anurag-saha-964400251/"}><FaLinkedin></FaLinkedin></Link>
        <Link to={""}></Link>
        <Link to={""}></Link>
      </footer>
    </>
  )
}

export default Footer
