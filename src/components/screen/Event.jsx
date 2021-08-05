import React from 'react'
import Blitz from '../Blitz'
import PreviousEvent from '../PreviousEvent'
import Timer from '../Timer'
import UpcomingEvent from '../UpcomingEvent'

function Event() {
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
