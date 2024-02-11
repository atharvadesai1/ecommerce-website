import React from 'react'
import Layout from '../components/Layout'
import '../styles/Home.css'
import BgImage from '../images/inter2.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <Layout>
        <div className="home" style={{backgroundImage:`url(${BgImage})`}}>
          <div className="header_container">
            <h1>"Where Every Bite<br/>Tells a Delicious<br/>Tale"</h1>
            <Link className='btnnn' to={'/menu'}>BOOK YOUR TABLE</Link>
          </div>
        </div>
      </Layout>
  )
}

export default Home
