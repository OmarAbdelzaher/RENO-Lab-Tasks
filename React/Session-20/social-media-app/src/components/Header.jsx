import React from 'react'
import { useState, useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../context/ThemeContext'

export default function () {
    const [totalFollowers, setTotalFollowers] = useState("23,004")
    const { theme, toggle } = useContext(ThemeContext)

    return (
        <div className='header'>
            <div className='left-header'>
                <h1 style={{color : theme.color }}>Social Media Dashboard</h1>
                <h4 style={{color : "#5f636d" }}>Total Followers: {totalFollowers}</h4>
            </div>
            <div className='right-header'>
                <h4 style={{color : theme.color }}>Dark Mode</h4>
                <input onClick={toggle} id="checkbox" name="checkbox" type="checkbox" /><label htmlFor="checkbox"></label>
            </div>
        </div>
    )
}
