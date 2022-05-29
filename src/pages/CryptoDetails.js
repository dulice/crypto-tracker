import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useGetHistoryQuery, useGetDetailQuery } from '../redux/coinApi';
import { BsArrowUp, BsArrowDown } from "react-icons/bs"
import millify from "millify";
import { Typography, CardContent, Container, Grid, Table, TableContainer, TableBody, TableCell, TableRow, Paper} from "@mui/material";
import {JustyAlignCenter, JustyBetween, theme} from "../components/customizeColor"
import HTMLReactParser from 'html-react-parser';
import Chart from './Chart';
import Loading from "../components/Loading"

const CryptoDetails = () => {
    const { id } = useParams()
    const [timeperiod, setTimeperiod] = useState("7d");
    const { data, isFetching } = useGetDetailQuery(id);
    const { data : history } = useGetHistoryQuery({id, timeperiod});
    const coinDetail = data?.data?.coin;
    console.log(history);

    
    if(isFetching) return <Loading />
   return (
    <Container>
       <JustyBetween>
           <h2 className="gradient"> {coinDetail?.name} ({coinDetail?.symbol})</h2>
           {coinDetail?.change > 0 ? 
           (<h4 style={{color: "green"}}> <BsArrowUp /> {coinDetail?.change} %</h4>) : 
           (<h4 style={{color: "red"}}> <BsArrowDown /> {coinDetail?.change} %</h4>) 
           }
       </JustyBetween>

//        <Chart history={history} />

       <Grid container spacing={3}>

            <Grid item sm={12} xs={6} lg={3} >
                <CardContent>
                    <JustyAlignCenter>
                            <Typography variant="h5" className="gradient" component="div">
                            {millify(coinDetail.marketCap)}
                            </Typography>
                            <Typography variant="body2">
                            Market Cap
                            </Typography>
                    </JustyAlignCenter>
                </CardContent>
           </Grid>

           <Grid item sm={12} xs={6} lg={3} >
                <CardContent>
                    <JustyAlignCenter>
                        <Typography variant="h5" className="gradient" component="div">
                        {millify(coinDetail.price)}
                        </Typography>
                        <Typography variant="body2">
                        USD Price
                        </Typography>
                    </JustyAlignCenter>              
                </CardContent>
           </Grid>

           <Grid item sm={12} xs={6} lg={3} >
                <CardContent>
                    <JustyAlignCenter>
                        <Typography variant="h5" className="gradient" component="div">
                        {millify(coinDetail["24hVolume"])}
                        </Typography>
                        <Typography variant="body2">
                        24h Volume
                        </Typography>
                    </JustyAlignCenter>
                </CardContent>
           </Grid>

           <Grid item sm={12} xs={6} lg={3} >
                <CardContent>
                    <JustyAlignCenter>
                        <Typography variant="h5" className="gradient" component="div">
                        {coinDetail.btcPrice}
                        </Typography>
                        <Typography variant="body2">
                        BTC price
                        </Typography>
                    </JustyAlignCenter>
                </CardContent>
           </Grid>
       </Grid>

       {/* chart */}

        <h3>What is {coinDetail?.name} ?</h3>
       <div>
           {HTMLReactParser(coinDetail.description)}
       </div>

           <h3>Related Links</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 367 }} aria-label="customized table">
                        <TableBody>
                        {coinDetail?.links.map((link, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="left">
                                <p>{link.name}</p>
                            </TableCell>
                            <TableCell align="left">
                                <a href={link.url} target="_blank">{link.url}</a>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
    </Container>
  )
}

export default CryptoDetails
