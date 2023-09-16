import React from 'react'
import Layout from '../components/Layout'
import MenuCard from './MenuCard'
import '../styles/Menu.css'

function Menu() {
  return (
    <div>
      <Layout>
        <div className="cards">
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </div>
      </Layout>
    </div>
  )
}

export default Menu
