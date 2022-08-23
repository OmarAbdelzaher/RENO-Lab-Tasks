import React from 'react'
import { useState, useEffect } from 'react'

export default function TweetArea() {
    const [tweet, setTweet] = useState('')
    const [text, setText] = useState('')

    const [disableSubmit, setDisable] = useState(true)
    const [allowRender, setRender] = useState(false)
    
    // const [maxLength, setMaxLength] = useState(240)
    // const [remaining, setRemaining] = useState(maxLength)

    const maxLength = 240
    // const remaining = maxLength - tweet.length

    const [timerId, setTimerId] = useState(null)

    function handleChange(e){
        setTweet(e.target.value)
        // setRemaining(maxLength - e.target.value.length)

        if(e.target.value.length < maxLength && e.target.value.length > 0){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        setTimerId(
            setTimeout(() => {
                setRender(true)
                setText(tweet)
            }, 3000)
        )
    }

    useEffect(() => {
        return () => {
            console.log('cleared')
            clearTimeout(timerId)
        }
    }, [text])

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <textarea name="tweet" rows="4" cols="50" onChange={(e)=>handleChange(e)} value={tweet}></textarea>
                <br/>
                <label>Remaining Characters: {maxLength - tweet.length}</label>
                <br/>
                <input type="submit" value="Tweet" disabled={disableSubmit}/>
            </form>
            {
                allowRender ? <p>{text}</p> : null
            }
        </div>
    )
}
