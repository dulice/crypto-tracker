 import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import styled from "styled-components"

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[400]
    },
    secondary: {
      main: '#19e7ef',
    },
  },
});

export  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
      border: 0,
      borderRadius: 15,
      color: 'white !important',
      padding: '5px 15px'
    }
  })

export const Responsive = styled.div`
  @media (max-width: 900px) {
    text-align: center;
  }
`

export const Nav = styled.div`
    position: fixed;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    top: 0;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0f2027;
    z-index: 10;
    opacity: .9;
    svg {
      margin-left: 2rem;
        font-size: 2rem;
        margin-right: 2rem;
    }
    a {
      margin-left: 2rem;
        margin-right: 2rem;
        color: bold;
    }
    .collapse {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 60px;
      right: 0;
      background: #0f2027;
      padding: 1rem;
      width: 50%;
      border-radius: 10px;
      opacity: .9;
      transition: all .5s;
    }
    .collapse a {
      margin: 1rem;
      width: 50px;
    }
    .collapse a:last-child {
      width: 90px;
    }
`
export const CardStyle = styled.div`
    padding: 1rem;
    box-shadow: 0 0 5px rgb(0 0 0 / 50%);
    background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
    color: white;
    border-radius: 5px;
`
export const Flex = styled.div`
 display: flex;
 align-item: center;
 h6{
     margin: auto;
 }
`
export const JustyBetween = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const JustyAlignCenter = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

export const Form = styled.div`
 background: #e5e5e5;
 border-radius: 5px;
 margin: 1rem 0 1rem;
 display: flex;
 align-items: center;
 input {
   outline: none;
   border-style: none;
   width: 80%;
   padding: 1rem;
   font-size: .9rem;
   background-color: transparent;
 }
 svg {
   margin: 0 1rem;
   font-size: 1.5rem;
 }
 textarea {
   width: 100%;
   height: 150px;
   background-color: transparent;
   font-size: .9rem;
   padding: 1rem;
   outline: none;
   border-style: none;
 }
`