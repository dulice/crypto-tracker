import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from "../redux/cryptoNewsApi"
import { CardActions, Button, CardMedia, CardContent, Typography, Card, CardActionArea, Grid, Container } from '@mui/material'
import { AiOutlineArrowRight } from "react-icons/ai"
import moment from "moment";
import newsImg from "../image/newsImg.jpg"
import { JustyBetween } from '../components/customizeColor';
import Loading from "../components/Loading"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Discover = ({simplified}) => {
  const [newsCategory, setNewsCategory ] = useState("Cryptocurrency")
  const count = simplified ? 6 : 12;
  const { data: newsList, isFetching } = useGetCryptoNewsQuery({newsCategory, count})
  // console.log(newsList);
  if(isFetching) return <Loading />
  return (
      <div className='discover'>
    <Container>
        <Typography variant="h4" my={3} color="primary">lastest news & acticles</Typography>
        <Grid container spacing={2}>
          {newsList.value.map((news, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <div  data-aos-duration="1100" data-aos="flip-right">
                <Card sx={{ maxWidth: 345 }}>
                  <a href={news.url} target="_blank">
                    <div className='hover-effect'>
                      <CardMedia className="news-img"
                        component="img"
                        height="140"
                        image={news?.image?.thumbnail?.contentUrl || newsImg}
                        alt=""
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {news.name.length > 50 ? news.name.substring(0, 50) : news.name}...
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {news.description.length > 100 ? news.description.substring(0, 100) : news.description}...
                        </Typography>
                      </CardContent>
                    <CardActions>
                      <JustyBetween>
                        <Button size="small" className="gradient">
                          See More <AiOutlineArrowRight color="#FE7280" />
                        </Button>
                        <Typography variant="p" color="gray">
                          {moment(news.datePublished).startOf('ss').fromNow() }
                        </Typography>
                      </JustyBetween>
                    </CardActions>
                    </div>
                  </a>
                </Card>
              </div>
            </Grid>
          )
        })}
        </Grid>
    </Container>
      </div>
  )
}

export default Discover
