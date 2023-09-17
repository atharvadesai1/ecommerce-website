import * as React from 'react'
import Layout from '../components/Layout'
import BgImage from '../images/coof51.jpg'
import '../styles/Contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


function Contact() {
  return (
    <div>
      <Layout>
        <div className="contact" style={{backgroundImage:`url(${BgImage})`}}>    
          <div className="contact_form">
            <div className="contactheading">Contact Us</div> 
            <div className="insidebox">
              <div className="left" style={{backgroundColor:'white',opacity:0.8,padding:'10px'}}>
                <Box
                component="form"
                sx={{
                  '& > :not(style)': {my:1,mx:2, width: '55ch'},
                  color:'white'
                }}
                noValidate
                autoComplete="off"
              >
                  <TextField id="outlined-basic" label="First Name" type='text' required variant="outlined" sx={{color:'white'}}/> <br />
                  <TextField id="outlined-basic" label="Last Name" type='text' required variant="outlined" sx={{color:'white'}}/> <br />
                  <TextField id="outlined-basic" label="Email ID" type='email' required variant="outlined" sx={{color:'white'}}/> <br />
                  <TextField
                      id="outlined-multiline-static"
                      label="Comment"
                      multiline
                      rows={4}
                      placeholder='Message/Suggestion'
                  />
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<SendIcon />} sx={{mb:3}}>
                      Send
                    </Button>
                  </Stack>
                </Box>
              </div>
            </div>
          </div>     
          </div>
      </Layout>
    </div>
  )
}

export default Contact
