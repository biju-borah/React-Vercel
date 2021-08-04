import React from 'react'

function Blitz() {
    return (
        <div className="container-fluid px-0" style={{overflowX: "hidden"}}>
            <div className="timer-heading"
            style={{display: "flex",justifyContent: "center",alignItems: "center", width: "100%",backgroundColor: "#080808",height: "10vh"}}>
                <h2 style={{fontVariant:"small-caps",color: "white",fontWeight:"bold"}}>Electra Blitz Surge</h2>
            </div>
            <div class="row no-gutters">
            <div class="col-md-1"></div>
            <div class="col-md-4" style={{alignSelf: "center",padding:"0 30px"}}>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="img/1.jpeg" class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="img/2.jpeg" class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="img/3.jpeg" class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="img/4.jpeg" class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="img/5.jpeg" class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="img/6.jpeg" class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
            <div class="col-md-6" style={{textAlign:"center",overflowX:"hidden"}}>

                <p style={{textAlign:"justify",padding:"30px 30px 0px 30px",fontSize:"1rem"}}>
                    While the current holidays are a much needed break for us, it must not stop us from continuing to be creative and interactive. This online journey is never too easy but through events and interactions we can still enjoy it and quit worrying about the consequences.<br/><br/>
                    To continue this creative journey, and to remain connected, even throughout this holiday month, we have decided to bring to you all BLITZSURGE - a profusion of high voltage events, to electrify you, for the better, where you can relish yourselves and feel connected with your friends.<br/><br/>
                    With a plethora of events, starting from the 9th of August, all the way to the 15th, we, the ELECTRA Society, hope to entertain and enchant you. We hope that a large number of students would participate in BLITZSURGE to feel the electricity surging through their veins.<br/><br/>

                </p>

            </div>
            <div class="col-md-1"></div>
        </div>
        </div>
    )
}

export default Blitz
