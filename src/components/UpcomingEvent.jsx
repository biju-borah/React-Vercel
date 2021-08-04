import React from 'react'
import "./UpcomingEvent.css";

function UpcomingEvent() {

    const Events = [
        {
            index: "1",
            heading: "Electra Brawls",
            date: "10th August, 2021",
            image: "img/1.jpeg",
            short: <>"War and Peace are more than magnificent works of art. They are Portinari’s call to action. Thanks to him, all leaders who enter the United Nations see the terrible toll of war and the universal dream for peace."<br /><br />Quoted by Ban Ki-moon during the inauguration of War and Peace, in the United Nations Headquarters on September 8, 2015, the above lines were dedicated to Candido Portinari, a Brazilian painter.</>,
        }
    ]
    return (
        <>
        <div class="container-fluid px-0" style={{overflowX: "hidden"}}>
        <div class="separator">
            <div class="line"></div>
            <h2 style={{fontVariant: "small-caps"}}>Upcoming Events</h2>
            <div class="line"></div>
        </div>
            {Events.map(events => {
                return(
                    <div key={"Event" + events.index}>
                        <div class="row no-gutters">
                            <div class="col-md-1"></div>
                            <div class="col-md-10" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>
                                <div style={{padding:"0 30px"}}>
                                    <h3 style={{borderBottom: "2px solid black",fontVariant: "small-caps"}}>{events.heading}
                                    </h3>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-1"></div>
                                <div class="col-md-4 d-flex justify-content-center align-items-center"
                                style={{textAlign:"center",padding:"30px"}}>
                                <img class="img-fluid" style={{borderRadius: "5%"}} src={events.image} alt="Electra"/>
                            </div>
                        <div class="col-md-6 mt-lg-3 mt-0" style={{textAlign:"center",overflowX:"hidden",alignSelf: "center"}}>
                            <p style={{textAlign:"justify",padding:"0 30px",fontSize:"1rem"}}>
                            {events.date} <br/><br/>
                            {events.short}
                            </p>
                            <button type="button" class="btn btn-outline-dark" style={{fontVariant: "small-caps"}}>Apply Now</button>
                        </div>
                        <div class="col-md-1"></div>
                        <hr/>
                        </div>
                    </div>
                )
            })}
        </div>     
        </>
    )
}

export default UpcomingEvent
