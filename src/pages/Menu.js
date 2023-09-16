import Layout from '../components/Layout'
import MenuCard from './MenuCard'
import '../styles/Menu.css'
import dinnerFood from './dinner'

function Menu() {
  return (
    <div>
      <Layout>
        <div className="cards">
          {dinnerFood.map((element)=>{
            return(
              <MenuCard className="card-items" foodName={element.name} foodImage={element.image} foodDesc={element.description} foodPrice={element.price}></MenuCard>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default Menu
