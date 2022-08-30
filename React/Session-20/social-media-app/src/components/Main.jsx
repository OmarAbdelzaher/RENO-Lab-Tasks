import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import SMCard from './SMCard'
import SMStats from './SMStats'

import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

import './Main.css'

export default function Main() {
    const { theme } = useContext(ThemeContext)

    let socialMeia = ["facebook", "twitter", "instagram", "youtube"]
    let socialStats = [
        {
            cardHeader : "Page Views",
            MediaTypeIcon : "facebook",
            MediaStats : "87",
            percentage : "3",
            up : true
        },
        {
            cardHeader : "Likes",
            MediaTypeIcon : "facebook",
            MediaStats : "52",
            percentage : "2",
            up : false
        },
        {
            cardHeader : "Likes",
            MediaTypeIcon : "instagram",
            MediaStats : "5462",
            percentage : "2257",
            up : true
        },
        {
            cardHeader : "Profile Views",
            MediaTypeIcon : "instagram",
            MediaStats : "52k",
            percentage : "1375",
            up : true
        },
        {
            cardHeader : "Retweets",
            MediaTypeIcon : "twitter",
            MediaStats : "117",
            percentage : "303",
            up : true
        },
        {
            cardHeader : "Likes",
            MediaTypeIcon : "twitter",
            MediaStats : "507",
            percentage : "553",
            up : true
        },
        {
            cardHeader : "Likes",
            MediaTypeIcon : "youtube",
            MediaStats : "107",
            percentage : "19",
            up : false
        },
        {
            cardHeader : "Total Views",
            MediaTypeIcon : "youtube",
            MediaStats : "1407",
            percentage : "12",
            up : false
        }
    ]

    return (
        <Container>
            <Row>
                {
                    socialMeia.map((item, index) =>{
                        return(
                            <Col key={index} sm={12} md={3} lg={3}>
                                <SMCard socialMediaType={item}/>
                            </Col>
                        )
                    })
                }
            </Row>
            
            <Row className='overview'>
                <h2 style={{color : theme.color }}>Overview - Today</h2>
            </Row>
            
            <Row>
                {
                    socialStats.map((item, index)=>{
                        return(
                            <Col key={index} sm={12} md={3} lg={3}>
                                <SMStats stats={item}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
