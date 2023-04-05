import React from 'react';
import { Card, CardMedia, CardContent, CardHeader, Typography, useMediaQuery } from '@mui/material'

const Faust = () => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: isIphone13 ? '4em' : '5em',
            marginLeft: isIphone13 ? '1em' : '5em',
            height: isIphone13 ? '200vh' : '83vh',
            width: isIphone13 ? '82vw' : '60vw',
            paddingTop: isIphone13 ? '4em' : '1em',
            overflow: 'scroll'
        }}>
            <CardHeader
                title="Jesus, I trust in you."
                subheader="1943"
            />
            <CardMedia
                sx={{
                    height: isIphone13 ? 600 : 1500,
                    width: isIphone13 ? 300 : 400
                }}
                component="img"
                height="620"
                image={`${process.env.PUBLIC_URL}/faust-jesus.jpeg`}
            />
            <CardContent>
                <Typography sx={{ mt: 5, ml: isIphone13 ? 2 : 10 }}>
                    <h3>(시작 기도)</h3>
                    <h3>주님의 기도, 성모송, 사도신경</h3>
                    <h3>(5단 기도)</h3>
                    <Typography sx={{ ml: isIphone13 ? 3 : 5 }}>
                        <h3>(시작 1회, 기도 10회  반복)</h3>
                        <p>(시작)</p>
                        <p>"영원하신 아버지, 저희가 지은 죄와 온 세상의 죄를 보속하는 마음으로 지극히 사랑하시는 당신 아들 우리 주 예수 그리스도의 몸과 피 영혼과 신성을 바치나이다."</p>
                        <p>(기도)</p>
                        <p>"예수님의 수난을 보시고 저희와 온 세상에 자비를 베푸소서"</p>
                    </Typography>
                    <h3>(다음 기도 3번 반복)</h3>
                    <p>"거룩하신 하느님, 전능하시고 영원하신 분이여, 저희와 온 세상에 자비를 베푸소서"</p>
                    <h3>(마침기도)</h3>
                    <p>오, 저희를 위한 자비의 샘에서 새차게 흘러나온 피와 물이시여, 저희는 당신께 의탁하나이다.</p>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Faust