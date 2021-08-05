import React from 'react'

function Result() {

    const Results = [
        {
            index: "1",
            Name: "Electra Brawls",
            date: "10th August, 2021",
            short: <>"War and Peace are more than magnificent works of art. They are Portinari’s call to action. Thanks to him, all leaders who enter the United Nations see the terrible toll of war and the universal dream for peace."<br /><br />Quoted by Ban Ki-moon during the inauguration of War and Peace, in the United Nations Headquarters on September 8, 2015, the above lines were dedicated to Candido Portinari, a Brazilian painter.</>,
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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                    {Results.map(result => {
                        return(
                            <div className="col">
                                <div className="card shadow-sm custom vert-move">
                                    <div className="card-body">
                                        <h3>{result.Name}</h3>
                                        <h5>Congratulation</h5>
                                        <p className="card-text" style={{textAlign:"justify"}}>{result.short}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-outline-dark" style={{fontVariant: "small-caps"}}>View</button>
                                            <button type="button" className="btn btn-outline-dark" style={{fontVariant: "small-caps"}}>Like</button>
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

export default Result
