import React, { useEffect } from 'react'

function Udevega() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Results = [
        {
            index: "1",
            img: "img/U1.jpg",
            Name: "BRAIN-O-BRAWL",
            short: <>1st- The Three Sannins<br/>
            2nd- Les Quizerables<br/>
            3rd- Weasleyss</>
        },
        {
            index: "2",
            img: "img/U2.png",
            Name: "CLEVER CAPTURE",
            short: <>1st- Aditya Verma<br/>
            2nd- Mrityunjoy K. Deb<br/>
            3rd- Devendae S. Gorla</>
        },
        {
            index: "3",
            img: "img/U4.jpg",
            Name: "FOODLE DOODLE",
            short: <>1st- Mudra Das<br/>
            2nd- Ishika Raj<br/>
            2nd- Rohan Deb</>
        },
        {
            index: "4",
            img: "img/U5.png",
            Name: "LUDO",
            short: <>1st- Kavya Sharma<br/>
            2nd- V.K. Raju Varadharaju<br/>
            3rd- Abhishek Bairwa</>
        },
        {
            index: "5",
            img: "img/U6.jpg",
            Name: "MEMELORDED 2.0",
            short: <>1st- Gudla Ajay BAbu<br/>
            2nd- Manish Sarmah<br/>
            3rd- Violina Deka</>
        },
        {
            index: "6",
            img: "img/U8.jpg",
            Name: "PHOTOGRAPHY COMPETITION",
            short: <>1st- Subhajit Das<br/>
            2nd- Reisa Ahmed<br/>
            3rd- Suhail Ahmed</>
        },
        {
            index: "7",
            img: "img/U9.jpg",
            Name: "PIRATE'S TREASURE",
            short: <>1st- The Shinigamis<br/>
            2nd- Thunderfin<br/>
            2nd- On the chase:Orion</>
        },
        {
            index: "8",
            img: "img/U7.jpg",
            Name: "MR. & MRS. UDVEGA",
            short: <>Mr Udvega - Tanmay Tripathy<br/>
            Mrs Udvega - Bishwashri Roy<br/><br/></>
        },
        {
            index: "9",
            img: "img/U10.jpg",
            Name: "SCRIBLE FACTORY",
            short: <>1st- Rahul Singh<br />
            2nd- Chandita Chowdhury<br />
            3rd- Anurag Saikia</>
        },
        {
            index: "10",
            img: "img/U3.jpg",
            Name: "COD MOBILE",
            short: <>Solo Tourney-<br />
            1st-Rupankar Das<br />
            2nd-Akashdeep Singh<br />
            3rd-Sinut Pathal<br />
            Squad Tourney-<br />
            1st-Team SOUL PURPOSE<br />
            2nd-Team MARAUDERS</>
        }
    ]

    return (
        <>
            <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
                <div className="timer-heading"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "#080808", height: "10vh" }}>
                    <h2 style={{ fontVariant: "small-caps", color: "white", fontWeight: "bold" }}>Udevega'20</h2>
                </div>
                <div className="row no-gutters" style={{ overflowX: "hidden" }}>
                    <div className="col-md-1"></div>
                    <div className="col-md-10" style={{ textAlign: "center", paddingTop: "3vh", overflowX: "hidden" }}>
                        <p style={{ textAlign: "justify", padding: "30px", fontSize: "1.1rem" }}>
                        "Greetings to all our lovely Juniors! We know that Online Classes are sucking out the juice of your new part of Life i.e. ENGINEERING. The time is still grey and hopefully everything will get better slowly and steadily. So, to make your life a little joyous, ELECTRA Society brings to you the most exciting week, ELECTRA WEEK, open to all freshmen of NIT Silchar. This entertaining week starts on 22nd of December and will end on the 29th of December, 2020."
                            <br />
                        </p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="separator">
                    <div className="line"></div>
                    <h2 style={{ fontVariant: "small-caps" }}>Results</h2>
                    <div className="line"></div>
                </div>
                <div className="container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
                    {Results.map(result => {
                        return (
                            <div key={"event" + result.index} className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <img src={result.img} height="300px" className="bd-placeholder-img card-img-top" alt="Electra" />
                                        <h5 className="mt-2" style={{ textAlign: "center" }}>{result.Name}</h5>
                                        <p className="card-text">{result.short}</p>
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

export default Udevega
