import React from 'react'
import { useHistory } from 'react-router-dom';
import "./PreviousEvent.css";

function PreviousEvent() {

    const history = useHistory();
    function direct(path){
        history.push(path);
    }

    const Results = [
        {
            index: "1",
            img : "img/power_surge.jpg",
            Name: "Power Surge",
            date: "April, 2021",
            to: "/surge",
            short: <>Electra Week was conducted under the banner of Electra Society by the second year students of Electrical Department.<br /></>,
        },
        {
            index: "2",
            img : "img/udevega.png",
            Name: "Udevega",
            date: "December, 2020",
            to:"/udevega",
            short: <>Freshers Week was conducted under the banner of Electra Society by the second year students of Electrical Department.<br /></>,
        }
    ]

    return (
        <>
        <div className="separator mt-3">
            <div className="line"></div>
            <h2 style={{fontVariant: "small-caps"}}>Previous Events</h2>
            <div className="line"></div>
        </div>
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 event g-3">
                    {Results.map(result => {
                        return(
                            <div key={"event" + result.index} className="col">
                                <div className="card shadow-sm vert-move">
                                    <div className="card-body">
                                    <img src={result.img} className="bd-placeholder-img card-img-top" alt="Electra" />
                                        <h3 className="mt-2" style={{textAlign:"center"}}>{result.Name}</h3>
                                        <p className="card-text" style={{textAlign:"justify",fontSize:"0.9rem"}}>{result.short}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            {/* <a href={result.to} className="btn btn-outline-dark" style={{fontVariant: "small-caps",color:"black"}}>View</a> */}
                                            <button type="button" className="btn btn-outline-dark" onClick={()=>direct(result.to)} style={{fontVariant: "small-caps"}}>View</button>
                                        </div>
                                        <small className="text-muted">{result.date}</small>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        )
                    })} 
                </div>
            </div>
        </div>
        </>
    )
}

export default PreviousEvent
