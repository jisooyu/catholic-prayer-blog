import React from 'react';
import { Card, CardMedia, CardContent, CardHeader, Typography } from '@mui/material'

const Faust = () => {
    return (
        <div style={{ marginTop: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Jesus, I trust in you."
                    subheader="1943"
                />
                <CardMedia
                    component="img"
                    height="620"
                    image={`${process.env.PUBLIC_URL}/faust-jesus.jpeg`}
                />
                <CardContent>
                    <Typography q>
                        <h3>(시작 기도)</h3>
                        <h5>주님의 기도, 성모송, 사도신경</h5>
                        <h5>(5단 기도 시작 전)</h5>
                        <p>"영원하신 아버지, 저희가 지은 죄와 온 세상의 죄를 보속하는 마음으로 지극히 사랑하시는 당신 아들 우리 주 예수 그리스도의 몸과 피 영혼과 신성을 바치나이다."</p>
                        <h5>(단 마다 다음 기도를 10번씩 5단에 걸쳐 반복)</h5>
                        <p>"예수님의 수난을 보시고 저희와 온 세상에 자비를 베푸소서"</p>
                        <h5>(5단 마친 후 다음 기도를 3번 반복)</h5>
                        <p>"거룩하신 하느님, 전능하시고 영원하신 분이여, 저희와 온 세상에 자비를 베푸소서"</p>
                        <h5>(마침기도)</h5>
                        <p>오, 저희를 위한 자비의 샘에서 새차게 흘러나온 피와 물이시여, 저희는 당신께 의탁하나이다.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}

export default Faust