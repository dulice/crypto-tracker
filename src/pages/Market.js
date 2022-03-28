import { Avatar, Container, Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import React, { useState, useEffect } from 'react'
import { theme, Flex, JustyBetween, CardStyle, Form} from '../components/customizeColor'
import { useGetCryptoQuery} from "../redux/coinApi"
import { BiSearch } from "react-icons/bi"
import millify from "millify"
import { Link as LinkR } from 'react-router-dom'
import Loading from "../components/Loading"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Market = ({simplified}) => { 
    const coin = simplified ? 12 : 100;
    const { data: cryptoList, isFetching } = useGetCryptoQuery(coin);
    const [search, setSearch ] = useState("");
    const [crypto, setCrypto] = useState(cryptoList?.data?.coins)
    console.log(cryptoList);
    
    useEffect(() => {
        const filterData = cryptoList?.data?.coins?.filter((coin) => {
            return coin.name.toLowerCase().includes(search.toLowerCase());
        })
        setCrypto(filterData);
    },[cryptoList, search])

    if(isFetching) return <Loading />

  return (
    <div className="market">
        <ThemeProvider theme={theme}>
            <Container>
                {!simplified && (
                    <Form>
                        <BiSearch />
                        <input 
                        type="text" 
                        placeholder="Search Crypto" 
                        onChange={e => setSearch(e.target.value)}
                        />
                    </Form>
                )}
                <Grid container spacing={2}>
                    {crypto?.map(coin => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={coin.uuid}>
                                <LinkR to={`/market/${coin.uuid}`}>
                                    <CardStyle>
                                        <div  data-aos-duration="1100" data-aos="zoom-in">
                                            <div className="hover-effect">                                      
                                            <Typography variant="h6" color="white">{coin.rank}. </Typography>
                                            <Flex className="flex">
                                                <Avatar src={coin.iconUrl} alt="" />
                                                <Typography variant="h6">{coin.name}</Typography>
                                            </Flex>
                                                <Typography variant="subtitle2">$ {millify(coin.price)}</Typography>
                                                <Typography variant="p" color="gray">BTC/USD</Typography>
                                            <JustyBetween>
                                                <Typography variant="subtitle2">Changes:</Typography>
                                                <Typography color="#fafafa" variant="subtitle2">{coin.change} %</Typography>
                                            </JustyBetween>
                                            <JustyBetween>
                                                <Typography variant="subtitle2">Marketcap:</Typography>
                                                <Typography color="#fafafa" variant="subtitle2">{millify(coin.marketCap)}</Typography>
                                            </JustyBetween>
                                            </div>
                                        </div>
                                    </CardStyle>
                                </LinkR>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </ThemeProvider>
    </div>
  )
}



export default Market