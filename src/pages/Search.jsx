import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'
import SearchForm from '../components/section/Search'

import VideoSearch from '../components/videos/VideoSearch'

const Search = () =>{

    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setVideos(result.items)
        })
        .catch(error => console.log(error));
        }, [searchId]);

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage'>

                <div>
                    <SearchForm />
                </div>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search