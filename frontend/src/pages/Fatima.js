import React from 'react';
import { Card, CardMedia, CardContent, CardHeader, Typography, useMediaQuery } from '@mui/material'
import { cardStyle } from '../styles/cardStyle'
const Fatima = () => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    return (
        <Card sx={{
            ...cardStyle,
            marginTop: isIphone13 ? '5em' : '8em',
            marginLeft: isIphone13 ? '2em' : '5em',
            height: isIphone13 ? '210vh' : '83vh',
            width: isIphone13 ? '82vw' : '50vw',
            paddingTop: isIphone13 ? '4em' : '1em',
        }}>
            <CardHeader
                sx={{ mt: isIphone13 ? 5 : 50 }}
                title="Our Lady of the Rosary"
                subheader="1917"
            />
            <CardMedia
                component="img"
                sx={{
                    height: isIphone13 ? 600 : 900,
                    width: isIphone13 ? 300 : 400
                }}
                image={`${process.env.PUBLIC_URL}/fatima-mother.jpeg`}
            />
            <CardContent>
                <Typography sx={{ mx: "auto", marginTop: "5" }}>
                    <h2 style={{ textAlign: 'center' }}>파티마 성모님 발현</h2>
                    <Typography style={{ marginTop: '3' }}>
                        <p>
                            포르투칼의 파티마에서 성모님이 발현하신 것은 1917년이다. 가톨릭 역사 상 성모님 발현 중 가장 잘 문서화 되어 있고 또 가장 유명하기도 한다. 성모님은 3명의 양치기 아이들에서 발현하셨다. 아이들의 이름은 루씨아 산토스(Lucia dos Santos), 프란시스코 마르또(Francisco Marto), 그리고 야신따 마르또(Jacinta Marto ) 이다. 1917년 5월과 10월 사이에 자신들 앞에 가장 아름다운 여인이 6번이나 나타나셨다고 이들은 증언하였다. 이 여인을 자신을 "Our Lady of the Rosary"라고 말하면서 세계 평화와 죄인의 회개를 위해 매일 묵주 기도을 바치라고 말씀하셨다.
                            이 여인은 또 3개의 비밀을 루씨아에게 밝혀 주었다. 나중에 수녀가 된 루씨아는 1941년 성모님이 가르쳐 주신 2개의 비밀을 먼저 밝혔는 데 하나는 지옥에 관한 모습이고 다른 하나는 2차대전에 대한 경고였다.  3번째 비밀은 루씨아 수녀가 2000년에 밝혔는 데 이는 1981년 요한바오로 2세 교황님 암살 시도에 관한 예언으로 해석되었다.
                            파티마 성모님 발현은 가톨릭 신자는 물론 비신자에게도 관심이 많은 사건으로 파티마는 가톨릭 신자가 많이 방문하는 성지가 되었다. 성모님의 메시지는 평화의 죄인의 회개를 위한 기도이며 지금도 가톨릭 신자들에게는 중요한 메시지로 남아 있다.

                        </p>
                    </Typography>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Fatima