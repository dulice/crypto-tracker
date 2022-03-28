import { Container, Grid, Typography, Button } from '@mui/material'
import { CgChevronDoubleRight } from "react-icons/cg"
import React from 'react'
import { Flex, Form, useStyles } from '../components/customizeColor'
import logo from "../image/logo.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  const classes = useStyles()
  return (
    <div id="contact">
      <Container>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <div  data-aos-duration="1100" data-aos="fade-right">
            <h3 className="gradient">Your suggestion</h3>
            <Form>
              <input type="text" placeholder="Name" />
            </Form>
            <Form>
              <input type="email" placeholder="Email" />
            </Form>
            <Form>
              <textarea name="" id="" placeholder="Message..."></textarea>
            </Form>
            <Button className={classes.root} variant="contained" endIcon={<CgChevronDoubleRight/>}>
            Send
          </Button>
          </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <h3 className="gradient">Location</h3>
           
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
              <div  data-aos-duration="1100" data-aos="fade-right">
            <Flex>
              <img src={logo} alt="logo" />
              <h3 className="gradient">Cryptoverse</h3>
            </Flex>
            <Typography variant="p" my={3} color="white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, atque harum laboriosam, natus distinctio enim vero incidunt deleniti perferendis repellendus nisi labore culpa repellat! Fuga alias ut modi qui soluta!
            </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
              <div  data-aos-duration="1100" data-aos="fade-up">
            <h3 className="gradient">Quick Links</h3>
            <a className="contact-link" href="#">Home</a>
            <a className="contact-link" href="#market">Market</a>
            <a className="contact-link" href="#discover">Discover</a>
            <a className="contact-link" href="#about">About</a>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
              <div  data-aos-duration="1100" data-aos="fade-left">
            <h3 className="gradient">Get in Touch</h3>
            <p>No.120, Taunggyi, Myanmar</p>
            <a className="contact-link"href="mailto:duliceellen600@gmail.com">duliceellen600@gmail.com</a>
            <a className="contact-link"href="tel:+959767331403" >+959767331403</a>
            <p>09.00 AM - 17.00 PM</p>
            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default Contact