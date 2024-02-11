import React from 'react'
import Layout from '../components/Layout'
import '../styles/About.css'
import BgImage from '../images/restaurant121.jpg'
import Chef from '../images/chefr.jpg'
// import {Typography} from '@mui/material'

function About() {
  return (
    <Layout>
      <div className="about" style={{backgroundImage:`url(${BgImage})`}}>
      </div>
      <div className="common_heading" sx={{flexGrow: 1} }>
        About Us
      </div>
      <div className="about_container">
        <img src={Chef} alt="" width='450px' height='320px'/>
        <div className="about_content">
          <div className="content_heading">Our Mission</div><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est aut esse odio repudiandae, optio facere, a dolore illum provident enim dolorem nam non dolor. Sunt sed illum maxime minus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem incidunt iure autem perspiciatis similique ratione, minima nostrum impedit a facere dolor, enim saepe iste dolorem ipsum consequuntur corporis cum ex. <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dolorum perferendis non, accusantium voluptatibus eius iusto earum alias? Assumenda quas nisi consequuntur vitae ad dolorem corporis porro esse labore sequi! <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus odit sit doloremque sapiente, eius iusto nemo aspernatur atque molestias, voluptatem ut. Unde architecto consequuntur asperiores ab delectus maiores perferendis?</p>
        </div> 
      </div>
    </Layout>
  );
}

export default About
