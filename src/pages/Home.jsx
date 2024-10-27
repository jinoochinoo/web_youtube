import React from 'react'
import Main from '../components/section/Main'
import Chart from '../components/contents/Chart'
import VideoSlider from '../components/videos/VideoSlider'

import GuestLogo from '../components/contents/GuestLogo'
import { guestReivew } from '../data/guestReview'

const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
            
            <Chart />
            <GuestLogo />
            <VideoSlider videos={guestReivew} title="😮 이렇게 엄청난 리뷰가!?" id="webd" />
        </Main>
    )
}

export default Home