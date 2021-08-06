import React, { useEffect } from 'react'
import Blitz from '../Blitz'
import PreviousEvent from '../PreviousEvent'
import Timer from '../Timer'
import UpcomingEvent from '../UpcomingEvent'

function Event() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <Timer/>
        <Blitz/>
        <UpcomingEvent/>
        <PreviousEvent/>
        </>
    )
}

export default Event
