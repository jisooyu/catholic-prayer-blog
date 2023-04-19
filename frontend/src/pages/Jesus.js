import React from 'react'
import { Card, CardMedia, CardContent, CardHeader, Typography, useMediaQuery } from '@mui/material'
import { cardStyle } from '../styles/cardStyle'

const Jesus = () => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    return (
        <Card sx={{
            ...cardStyle,
            height: isIphone13 ? '200vh' : '100vh',
            width: isIphone13 ? '82vw' : '70vw',
            marginLeft: isIphone13 ? '2em' : '1em'
        }}>
            <CardHeader
                title="Lord's Prayer"
                subheader="주님의 기도"
            />
            <CardMedia
                component="img"
                sx={{
                    height: isIphone13 ? 300 : 900,
                    width: isIphone13 ? 200 : 400
                }}
                image={`${process.env.PUBLIC_URL}/Lords-Prayer.jpeg`}
            />
            <CardContent>
                <Typography sx={{ marginTop: '5' }}>
                    <h3 style={{ textAlign: 'center' }}>주님의 기도</h3>
                    <Typography style={{ marginTop: '3' }}>
                        <p>하늘에 계신 우리 아버지</p>
                        <p>아버지의 이름이 거룩히 빛나시며</p>
                        <p>아버지의 나라가 오시며</p>
                        <p>아버지의 뜻이 하늘에서와 같이</p>
                        <p>땅에서도 이루어 지소서</p>
                        <p>오늘 저희에게 일용할 양식을 주시고</p>
                        <p>저희에게 잘못한 이를 저희가 용서하오니</p>
                        <p>저희 죄를 용서하시고</p>
                        <p>저희를 유혹에 빠지지 않게 하시고</p>
                        <p>악에서 구하소서</p>
                        <p>아멘.</p>
                    </Typography>
                </Typography>
            </CardContent>
        </Card>

    )
}

export default Jesus;