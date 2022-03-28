import React from 'react'
import {Button, Grid, Typography, Container} from "@mui/material"
import { ThemeProvider} from '@mui/material/styles';
import hero from "../image/img.svg"
import { theme, useStyles, Responsive } from "../components/customizeColor"
import  CountUp from "react-countup"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const About = () => {

  const classes = useStyles();
  return (
    <div id="about">
      <ThemeProvider theme={theme}>
        <Responsive>
          <Container>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
            >
              <div 
                  data-aos-duration="1100"
                data-aos="fade-right">
                <Grid item xs={12} md={5} my={5} >
                <img src={hero} alt="" width="400px"/>
              </Grid>
              </div>
              <Grid item xs={12} md={5} my={5} >
                <div  data-aos-duration="1100" data-aos="fade-left">
                  <Typography mb={5} >
                  <Typography variant="h4" mb={3} color="primary">
                 About Crypto Coin is the best for you
                  </Typography>
                  <Typography variant="p" color="secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </Typography>
                </Typography>
                </div>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography mb={5} >
                      <Typography variant="h4"  className="gradient">
                        <CountUp
                        redraw={true}
                        end={170}
                        duration={2.5}
                        suffix="M+"
                        />
                      
                      </Typography>
                      <Typography variant="p" color="white">
                        User Worldwide
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography mb={5} >
                      <Typography variant="h4"  className="gradient">
                        <CountUp
                        redraw={true}
                        end={165}
                        duration={2.5}
                        suffix="+"
                        />
                      </Typography>
                      <Typography variant="p" color="white">
                        Supported
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography mb={5} >
                      <Typography variant="h4"  className="gradient">
                        <CountUp
                        redraw={true}
                        end={65}
                        duration={2.5}
                        suffix="M+"
                        />
                      </Typography>
                      <Typography variant="p" color="white">
                        Transitions
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>

             <Grid
              container
              alignItems="center"
              justifyContent="space-between"
            >    
              <Grid item xs={12} md={5} my={5} >
            <div  data-aos-duration="1100" data-aos="fade-right">        
                <Typography mb={5} >
                  <Typography variant="h4" mb={3} color="primary">
                Do you want to learn how to work Crypto
                  </Typography>
                  <Typography variant="p" color="secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </Typography>
                </Typography>
                <Link to="/discover">
                  <Button variant="contained"
                  className={classes.root}
                >Read More</Button>
                </Link>
            </div>
              </Grid>
              <Grid item xs={12} md={5} my={5} >
                <div  data-aos-duration="1100" data-aos="fade-left">                      
                  <img src={hero} alt="" width="400px"/>
                </div>
              </Grid>

            </Grid>
          </Container>
        </Responsive>
      </ThemeProvider>
    </div>
  )
}


export default About