import React from 'react'
import Hero from './Hero'
import About from './About'
import Market from './Market'
import Discover from "./Discover"
import Contact from "./Contact"
import { Button, Container, Typography } from '@mui/material'
import { AiOutlineArrowRight} from "react-icons/ai"
import { Link as LinkR } from 'react-router-dom'
import styled from "styled-components"
import { useStyles } from '../components/customizeColor'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
         <Hero />
         <About />
         <div id="market">
           <Container>
              <Typography variant="h4" my={3} color="primary">top 12 cryptocurrencies</Typography>
           </Container>
                <Market simplified />
                <ButtonEnd>
                  <LinkR to="/market"> 
              <div  data-aos-duration="1000" data-aos="fade-up">
                    <Button className={classes.root} variant='contained'>See More <AiOutlineArrowRight /></Button>
                    </div>
                </LinkR>
                </ButtonEnd>
         </div>
         <div id="discover">
           <Discover simplified />
           <ButtonEnd >
              <div  data-aos-duration="1000" data-aos="fade-up">
             <LinkR to="/discover" style={{marginRight: "2rem"}}> 
              <Button className={classes.root} variant='contained' >See More <AiOutlineArrowRight /></Button>
           </LinkR>
           </div>
           </ButtonEnd>
         </div>
         <Contact />
         <Footer />
    </div>
  )
}

const ButtonEnd = styled(Container)`
    display: flex;
    justify-content: end;
    margin-top: 1rem;
    a {
      text-decoration: none;
    }
`
export default Home