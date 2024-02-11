import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import { useDispatch } from 'react-redux';
// import Menu from './Menu';
import '../styles/Menu.css'
// import {ADD} from '../redux/actions/action'
// import { Menu } from '@mui/material';

// let itemsadded=0

function MenuCard(props) {
    // const [itemsadded, setitemsadded] = useState(0)
    const [quantity, setQuantity] = useState(1);
    // const dispatch = useDispatch();
    
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    
    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    const clickAddToCart = () => {
        props.setitemsadded(props.itemsadded+quantity)
        // console.log("guttar"+props.itemsadded)
        console.log(props.ele)
        // dispatch(ADD(props.ele));

    }

  return (
    <div>
        
        <Card sx={{ maxWidth: 350, marginBottom: 4, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.499)'}}>
            <CardMedia
                sx={{ height: 200, initalWidth: 350}}
                image={props.foodImage}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom component="div" sx={{fontFamily:'DM Serif Display',fontSize:'30px',color:'black'}}>
                {props.foodName}
                </Typography>
                <Typography gutterBottom component="div" sx={{fontFamily:'Work Sans',fontSize:'25px',color:'#3132d1'}}>
                {props.foodPrice}<CurrencyRupeeIcon sx={{position:'relative', top:'5px',fontSize:'23px',fontWeight:'bolder'}}></CurrencyRupeeIcon>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.foodDesc}
                </Typography>
            </CardContent>
            <CardActions className='bottombtns'>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                    onClick={clickAddToCart} 
                >
                    <IconButton color="inherit" aria-label="Add to Cart" style={{ padding: '6px' }}>
                        <AddShoppingCartIcon fontSize="small" /> {/* Adjust the icon size as needed */}
                    </IconButton>
                    ADD TO CART
                </Button>
                <div className='plusminus'>
                    <IconButton color="primary" onClick={handleDecrement}>
                        <RemoveIcon />
                    </IconButton>
                    {quantity}
                    <IconButton color="primary" onClick={handleIncrement}>
                        <AddIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    </div>
  )
}

export default MenuCard;

