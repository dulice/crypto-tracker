import { Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link as LinkS, animateScroll as scroll } from "react-scroll"
import logo from "../image/logo.svg"
import { BiMenuAltRight, BiX}  from "react-icons/bi"
import { Nav, useStyles, theme } from "../components/customizeColor"
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Button } from "@mui/material"

const Navbar = () => {
     const classes = useStyles();
    const [collapse, SetCollapse] = useState(false);
    useEffect(() => {
        // const currentWidth = window.innerWidth;
        window.addEventListener("resize", () => {
            if(window.innerWidth > 769) {
                SetCollapse(false);
            }
            if(window.innerWidth < 769) {
                SetCollapse(true)
            }
        })
    },[window.innerWidth])
  return (
       <ThemeProvider theme={theme}>
            <div id="nav">
                <Nav>
                    <a onClick={scroll.scrollToTop} className="">
                        <img src={logo} alt="" />
                    </a>
                    {collapse ? <BiMenuAltRight /> : (
                        <div>
                            <LinkS activeClass="active" to="about" spy={true} smooth={true} offset={-60} >
                                About
                            </LinkS>
                            <LinkS activeClass="active" to="market" spy={true} smooth={true} offset={-60}>
                                Market
                            </LinkS>
                            <LinkS activeClass="active" to="discover" spy={true} smooth={true} offset={-60}>
                                Discover
                            </LinkS>
                            <LinkS activeClass="active" to="contact" spy={true} smooth={true} offset={-60}>
                                Contact
                            </LinkS>
                            <Link to="signin">
                                <Button variant="contained"
                                    className={classes.root}
                                    >Sign In</Button>
                            </Link>
                        </div>
                    )}
                    
                </Nav>
            </div>
       </ThemeProvider>
  )
}

export default Navbar