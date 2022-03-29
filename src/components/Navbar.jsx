import React, { useState, useEffect } from 'react'
import { Link as LinkS, animateScroll as scroll } from "react-scroll"
import logo from "../image/logo.svg"
import { BiMenuAltRight, BiX}  from "react-icons/bi"
import { Nav, useStyles, theme } from "../components/customizeColor"
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Button, Box, Container, Hidden } from "@mui/material"

const Navbar = () => {
     const classes = useStyles();
    const [collapse, setCollapse] = useState(false);

  return (
       <ThemeProvider theme={theme}>
            <div id="nav">
                <Container>
                    <Nav>
                        <a onClick={scroll.scrollToTop} className="">
                            <img src={logo} alt="" />
                        </a>
                        <Hidden mdDown style={{width: "75%"}}>
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
                        </Hidden>
                        <Hidden mdUp>
                            { collapse ? <BiX onClick={() => setCollapse(false)} /> : <BiMenuAltRight onClick={() => setCollapse(true)}/>}
                            {collapse && (
                                    <div className="collapse">
                                        <LinkS onClick={() => setCollapse(false)} activeClass="active" to="about" spy={true} smooth={true} offset={-60} >
                                        About
                                        </LinkS>
                                        <LinkS onClick={() => setCollapse(false)} activeClass="active" to="market" spy={true} smooth={true} offset={-60}>
                                            Market
                                        </LinkS>
                                        <LinkS onClick={() => setCollapse(false)} activeClass="active" to="discover" spy={true} smooth={true} offset={-60}>
                                            Discover
                                        </LinkS>
                                        <LinkS onClick={() => setCollapse(false)} activeClass="active" to="contact" spy={true} smooth={true} offset={-60}>
                                            Contact
                                        </LinkS>
                                        <Link to="signin">
                                            <Button variant="contained"
                                                className={classes.root}
                                                >Sign In</Button>
                                        </Link>
                                    </div>
                                )}
                        </Hidden>
                    </Nav>
                </Container>
                    
            </div>
       </ThemeProvider>
  )
}

export default Navbar