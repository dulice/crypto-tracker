import React, { useEffect, useState } from 'react'
import {Button, Grid, Typography, Container} from "@mui/material"
import { ThemeProvider} from '@mui/material/styles';
import hero from "../image/heroimg.svg"
import { theme, useStyles, Responsive } from "../components/customizeColor"
import { Link } from 'react-scroll';
import { ImArrowDownRight2 } from 'react-icons/im'
import { motion } from "framer-motion"

const Hero = () => {
  const classes = useStyles();

  return (
    <div className="hero" id="hero">
      <ThemeProvider theme={theme}>
        <Responsive>
          <Container>
            <Grid
              container
              height="100vh"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs={12} md={5} my={5} >
                <div  data-aos-duration="1100" data-aos="fade-right">        
                  <Typography mb={5} >
                    <Typography variant="h3" mb={3} color="primary">
                    Hunter <br/>
                    digital currency quickly & easily
                    </Typography>
                    <Typography variant="p" color="secondary">
                      Crytoverse is the easiest place to hunt currency. Sign up and get started today.
                    </Typography>
                  </Typography>
                  <Link to="market" spy={true} smooth={true} offset={-60} >
                    <Button variant="contained"
                    className={[classes.root, "hover-ani"]}
                  >Get Start Now
                 < ImArrowDownRight2 className="ani" /> 
                  </Button>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} md={5} my={5} >
              <div
                  data-aos-duration="1100" data-aos="fade-left"
              >        
                <img src={hero} alt="" width="100%" className="hero-img"/>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Responsive>
      </ThemeProvider>
    </div>
  )
}


export default Hero