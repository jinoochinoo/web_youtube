import React from 'react'
import Main from '../components/section/Main'

import { gsapText } from '../data/gsap'
import { Link } from 'react-router-dom'

const Website = () => {
    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            <section id='gsap'>
                <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
                <div className='video__inner'>
                    {gsapText.map((video, key) => (
                        <div className="video" key={key}>
                            <div className="video__thumb play__icon">
                                <Link to={`/video/${video.videoId}`}>
                                    <img src={video.img} alt={video.title} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Website