import React, {useEffect} from 'react'
import Main from '../components/section/Main'



const Not = () =>{

    useEffect(() => {
        alert('구현 안 됐다. 누르지마라 마!');
    }, []);
    
    return (
        <Main
        title = ""
        description="">
            Not
        </Main>
    )
}

export default Not