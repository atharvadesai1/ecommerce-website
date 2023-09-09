import React from 'react'
import Layout from '../components/Layout'
import '../styles/Home.css'
import BgImage from '../images/inter2.jpg'

function Home() {
  return (
      <Layout>
        <div className="home" style={{backgroundImage:`url(${BgImage})`}}>
          <div className="header_container">
            <h1>"Where Every Bite<br/>Tells a Delicious<br/>Tale"</h1>
            <button>BOOK YOUR TABLE</button>
          </div>
        </div>
      </Layout>
  )
}

export default Home
