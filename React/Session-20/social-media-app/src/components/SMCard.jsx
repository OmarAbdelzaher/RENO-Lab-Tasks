import React, { useEffect, useState } from 'react'
import './SMCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';

library.add(faSquareFacebook, faTwitter, faInstagram, faYoutube);

export default function SMCard(props) {
    const { theme } = useContext(ThemeContext)

    const [cardStyle, setCardStyle] = useState({})
    const [cardData, setCardData] = useState({})

    const facebookStyles = {
        "backgroundColor" : "hsl(208, 92%, 53%)"
    }

    const twitterStyles = {
        "backgroundColor" : "hsl(203, 89%, 53%)"
    }

    const instagramStyles = {
        "background" : "linear-gradient(to right, #eec374, #c55a90)"
    }

    const youtubeStyles = {
        "backgroundColor" : "hsl(348, 97%, 39%)"
    }

    const facebookData = {
        icon : <FontAwesomeIcon icon={['fa-brands', 'fa-square-facebook']} style={{color : "#1d8ef1"}}/>,
        username : "@nathanf",
        MediaTotal : "1987",
        Followers : true,
        IncDec : "12",
        up : true
    }

    const twitterData = {
        icon : <FontAwesomeIcon icon={['fa-brands', 'fa-twitter']} style={{color : "#1d8ef1"}}/>,
        username : "@nathanf",
        MediaTotal : "1044",
        Followers : true,
        IncDec : "99",
        up : true
    }
    
    const instagramData = {
        icon : <div className='insta-icon'></div> ,
        // <FontAwesomeIcon icon={['fa-brands', 'fa-instagram']} />,
        username : "@realnathanf",
        MediaTotal : "11k",
        Followers : true,
        IncDec : "1099",
        up : true
    }

    const youtubeData = {
        icon : <FontAwesomeIcon icon={['fa-brands', 'fa-youtube']} style={{color : "#a51536"}}/>,
        username : "Nathan F.",
        MediaTotal : "8239",
        Followers : false,
        IncDec : "144",
        up : false
    }
    

    useEffect(()=>{
        switch (props.socialMediaType){
            case "facebook":
                setCardStyle(facebookStyles)
                setCardData(facebookData)
                break;
            case "twitter":
                setCardStyle(twitterStyles)
                setCardData(twitterData)
                break;
            case "instagram":
                setCardStyle(instagramStyles)
                setCardData(instagramData)
                break;
            case "youtube":
                setCardStyle(youtubeStyles)
                setCardData(youtubeData)
                break;
            default:
                break;
        }
    }, [])
    
    return (
        <div className='card main-cards' style={{backgroundColor : theme.cardBG }}>
            <div className='media-bg' style={cardStyle}></div>
            <div className='icon-user-display'>
                {cardData.icon}
                <h5 style={{color : theme.color }}>{cardData.username}</h5>
            </div>

            <h2 style={{color : theme.color }}>{cardData.MediaTotal}</h2>
            
            <h5 className='followers' style={{color : theme.color }}>{cardData.Followers ? "Followers" : "Subscribers"}</h5>

            {
                cardData.up ? 
                <h6 style={{"color":"#599a8c"}}> 
                    <FontAwesomeIcon icon={faCaretUp}/> {cardData.IncDec} Today
                </h6> :
                <h6 style={{"color":"#b40533"}}>
                    <FontAwesomeIcon icon={faCaretDown}/> {cardData.IncDec} Today
                </h6>
            }    
        </div>
    )
}
