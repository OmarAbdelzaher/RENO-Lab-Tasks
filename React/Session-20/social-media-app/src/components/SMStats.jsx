import React from 'react'
import './SMStats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';
 
library.add(faSquareFacebook, faTwitter, faInstagram, faYoutube);

export default function SMStats(props) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className='card stats-card' style={{backgroundColor : theme.cardBG }}>
            <div className='stats-display'>
                <h4 style={{color : theme.color }}>{props.stats.cardHeader}</h4>
                {
                    props.stats.MediaTypeIcon === "facebook" ? 
                        <FontAwesomeIcon icon={['fa-brands', 'fa-square-facebook']} style={{color : "#1d8ef1"}} /> :
                    props.stats.MediaTypeIcon === "twitter" ? 
                        <FontAwesomeIcon icon={['fa-brands', 'fa-twitter']} style={{color : "#1d8ef1"}} /> :
                    props.stats.MediaTypeIcon === "instagram" ? 
                        // <FontAwesomeIcon icon={['fa-brands', 'fa-instagram']} className='instagram' /> :
                        <div className='insta-icon'></div> :
                    props.stats.MediaTypeIcon === "youtube" ? 
                        <FontAwesomeIcon icon={['fa-brands', 'fa-youtube']} style={{color : "#a51536"}} /> : null
                }
            </div>
            <div className='stats-display'>
                <h2 style={{color : theme.color }}>{props.stats.MediaStats}</h2>
                <div className='stats-percent'>
                    {
                        props.stats.up ?
                        <h6 style={{"color":"#599a8c"}}>
                            <FontAwesomeIcon icon={faCaretUp} className='caret'/> {props.stats.percentage}%
                        </h6> :
                        <h6 style={{"color":"#b40533"}}>
                            <FontAwesomeIcon icon={faCaretDown} className='caret'/> {props.stats.percentage}%
                        </h6>    
                    }
                </div>
            </div>
        </div>
    )
}
