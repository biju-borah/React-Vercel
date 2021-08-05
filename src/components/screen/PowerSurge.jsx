import React from 'react'

function PowerSurge() {

    const Results = [
        {
            index: "1",
            img: "img/P1.jpg",
            Name: "ANDROID ELECTRATHON",
            short: <><br/>1st- Nikita Khapate<br/>
            2nd- Biju Borah<br /></>
        },
        {
            index: "2",
            img: "img/P2.jpg",
            Name: "BETTER THAN AUTOCORRECT",
            short: <>1st- Diksheet Agarwal (1912059)<br/>
            2nd- Anusha Hazarika (1914128)<br/>
            3rd- Aditya Soni (1912101)</>
        },
        {
            index: "3",
            img: "img/P3.jpg",
            Name: "BIG BULLS",
            short: <>1st- Rituraj Kr Pathak<br />
            2nd- Tejas Sangale<br />
            2nd- Piyush Yadav</>
        },
        {
            index: "4",
            img: "img/P12.jpg",
            Name: "VOICE OF ELECTRA",
            short: <>Tanmay Tripathy<br />
            Adrita Buragohain<br /></>
        },
        {
            index: "5",
            img: "img/P5.jpg",
            Name: "CRACK THE CODE",
            short: <>1st- Manish Kumar Poddar<br />
            2nd- Hardik Jain<br /></>
        },
        {
            index: "6",
            img: "img/P6.jpg",
            Name: "ELECTRA HACKS",
            short: <>1st- Aditya Verma<br />
            2nd- Ayush Sharma<br /></>
        },
        {
            index: "7",
            img: "img/P10.jpg",
            Name: "PALETTES & PATTERNS",
            short: <>1st- Reetom Rana Dutta<br />
            2nd- Geetanjali Deka<br />
            3rd- Meghna Boro</>
        },
        {
            index: "8",
            img: "img/P8.jpg",
            Name: "MATHELATICS",
            short: <>1st- Dibyajyoti bora<br />
            2nd- Amogh Nagunoori<br />
            3rd- Aditya Agarwal</>
        },
        {
            index: "9",
            img: "img/P9.jpg",
            Name: "OBSCURA",
            short: <>1st- Shibam Debnath<br />
            2nd- Emon Kalita<br />
            3rd- Manav Sanghi</>
        },
        {
            index: "10",
            img: "img/P7.jpg",
            Name: "DECRYPTO-FY",
            short: <>1st- Team DAV(Kolli Vardhan,Kurumoju Deepak )<br />
            2nd-Team Static(Aditya Bhura,Rohit Raj )<br />
            3rd-Team Notalone(Kushagra Kumar,Dipesh Kumar Sinha )</>
        },
        {
            index: "11",
            img: "img/P11.jpg",
            Name: "TYPING RACE",
            short: <>1st- Nihar Basisth<br />
            2nd- Aditya Agarwal<br />
            2nd- Sampriti Pate</>
        },
        {
            index: "12",
            img: "img/P4.jpg",
            Name: "COD MOBILE",
            short: <>1st) Team SOUL PURPOSE (Sunit Pathak, Rupankar Das, Seeni Lakshmi, Partha Pratim Patgiri, Akashdeep Singh, Gopireddy Nandeeshwar Reddy)<br/>
            2nd) Team PHOENIX (Jyotiska Das, Abhilash Paul, Ayang Yangi, Laharjit Das)</>
        }
    ]

    return (
        <>
            <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
                <div className="timer-heading"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "#080808", height: "10vh" }}>
                    <h2 style={{ fontVariant: "small-caps", color: "white", fontWeight: "bold" }}>Power Surge 6.0</h2>
                </div>
                <div className="row no-gutters" style={{ overflowX: "hidden" }}>
                    <div className="col-md-1"></div>
                    <div className="col-md-10" style={{ textAlign: "center", paddingTop: "3vh", overflowX: "hidden" }}>
                        <p style={{ textAlign: "justify", padding: "30px", fontSize: "1.1rem" }}>
                            "Electra Society brings to you 𝘗𝘖𝘞𝘌𝘙𝘚𝘜𝘙𝘎𝘌 6.0 – a profusion of some spectacularly breathtaking events to make you feel all alive again, to rejuvenate your brain cells and to break the boredom throughout. This, you can enjoy all from the safety and comfort of your homes."
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

export default PowerSurge
