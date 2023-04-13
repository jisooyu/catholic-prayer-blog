import React from 'react';
import { Card, CardMedia, CardContent, CardHeader, Typography, useMediaQuery } from '@mui/material'
import { cardStyle } from '../styles/cardStyle'
const Faust = () => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    return (
        <Card sx={{
            ...cardStyle,
            height: isIphone13 ? '200vh' : '83vh',
            width: isIphone13 ? '82vw' : '65vw',
            marginLeft: isIphone13 ? '2em' : '1em'
        }}>
            <CardHeader
                title="Jesus, I trust in you."
                subheader="1943"
            />
            <CardMedia
                sx={{
                    height: isIphone13 ? 600 : 900,
                    width: isIphone13 ? 300 : 400,
                }}
                component="img"
                image={`${process.env.PUBLIC_URL}/faust-jesus.jpeg`}
            />
            <CardContent >
                <Typography >
                    <h3>(시작 기도)</h3>
                    <h3>주님의 기도, 성모송, 사도신경</h3>
                    <h3>(묵주 기도 5회)</h3>
                    <Typography >
                        <h3>(시작 1회)</h3>
                        <p>"영원하신 아버지, 저희가 지은 죄와 온 세상의 죄를 보속하는 마음으로 지극히 사랑하시는 당신 아들 우리 주 예수 그리스도의 몸과 피 영혼과 신성을 바치나이다."</p>
                        <h3>(기도 10회)</h3>
                        <p>"예수님의 수난을 보시고 저희와 온 세상에 자비를 베푸소서"</p>
                    </Typography>
                    <h3>(묵주 마침기도 3회 )</h3>
                    <p>"거룩하신 하느님, 전능하시고 영원하신 분이여, 저희와 온 세상에 자비를 베푸소서"</p>
                    <h3>(마침기도)</h3>
                    <p>오, 저희를 위한 자비의 샘에서 새차게 흘러나온 피와 물이시여, 저희는 당신께 의탁하나이다.</p>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Faust