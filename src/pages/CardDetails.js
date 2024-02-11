import React from 'react'
import Layout from '../components/Layout'
import margheritaPizza from '../images/margherita_pizza.jpg'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import '../styles/Cards.css'

function CardDetails() {
  return (
    <Layout>
        <div>
            <div className="box">
                <div className="heading">
                    <h1 style={{textAlign:'center'}}>Items Details</h1>   
                </div>
                
                <section className="container">
                    <div className="items" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div className="image">
                            <img src={margheritaPizza} alt="" style={{width:'250px',height:'200px'}}/>
                        </div>
                        <div className='details'>
                            <tr>
                                <td>
                                    <p><strong>Name: </strong>Magharita Pizza</p>
                                    <p><strong>Description: </strong>Classic tomato and mozzarella pizza</p>
                                    <p><strong>Price: </strong>256₹</p>
                                </td>
                                <td>    
                                    <p><strong>Rating: </strong>8.3★</p>
                                    <p><strong>Order Review: </strong>1567+ orders placed</p>
                                    <p><strong>Remove:</strong><IconButton aria-label="delete" size="small"><DeleteIcon fontSize="inherit"/></IconButton></p>
                                </td>
                            </tr>
                        </div>
                    </div><br />
                    <div className="btn">
                        <Button className='previous' variant="contained" size="small">Previous</Button>
                        <Button className='next' variant="contained" size="small">Next</Button>
                    </div>
                </section> 
            </div> 
        </div>
    </Layout>
  )
}

export default CardDetails
