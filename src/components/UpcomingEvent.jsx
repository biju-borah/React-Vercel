import React from 'react'
import "./UpcomingEvent.css";
import Swal from 'sweetalert2'


function UpcomingEvent() {

    function opensweetalert()
    {
    Swal.fire({
      title: 'Oops !',
      text: "This button will start functioning soon !",
      })
    }

    function Expand(index) {
        var buttons = document.getElementsByClassName("expand" + index)
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "hidden"
        }
        let element = document.getElementById("Expand" + index)
        element.style.display = ""
        //console.log(element)
    }

    function Shrink(index) {
        // let element = document.querySelector("#Expand")
        // var buttons = document.getElementsByClassName("expand")
        let element = document.getElementById("Expand" + index)
        var buttons = document.getElementsByClassName("expand" + index)
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "visible"
        }
        //console.log(element)
        element.style.display = "none"
    }

    const Lists = [
        {
            index: "1",
            heading: "Electra Brawls",
            image: "img/1.jpeg",
            short: <>Hey there, busy people.<br/><br/>
            Vacations going on well? Missing your ‘online’ friends? Want to have some fun together before the classes start again? We at ELECTRA might just have the perfect event for you all.<br/><br/>
            “Keep Calm and have a chicken Dinner”<br/><br/>
            We can all relate to the craze for Battle Royale games and with the launch of BGMI, this craze has just been amplified tenth folds. It’s time for you to get your squads ready, pick up your favourite assault rifles, clean your scopes and collect your attachments as ELECTRA presents ELECTRA BRAWLS, an online BGMI squad event open for all 3rd semester students.</>,
            long: <>ELECTRA invites BATTLEGROUNDS MOBILE INDIA, BGMI players of NIT Silchar to play a squad-of-four event online. So, come and join us in this exhilarant event.<br/>
            Date: 10th and 11th August<br/>
            Time: 4 pm onwards<br/><br/>
            Form: https://forms.gle/ieqmFtErtRWZVfE69<br/><br/>
            Deadline to fill the form is 8 August, 11 pm.<br/>
            More details regarding game mode and rules will be shared in the WhatsApp Group. Note that only team leaders should fill the form and join the WhatsApp group. We hope for a positive turnaround of people.<br/>
            May the best squad win.</>,

        },
        {
            index: "2",
            heading: "Game of Kings",
            image: "img/2.jpeg",
            short: <>Ludo Champs of NIT Silchar! <br/>
            Tired of a pandemic laden, uneventful vacation? Want to spice up your holidays? Wanna try your luck? Want to roll the dice? Why wait? We at ELECTRA have organised just the perfect event for you.<br/><br/>
            “You can prepare all you want, but if you never roll the dice you’ll never be successful.”<br/><br/>
            Gather your lucky charms, roll up your sleeves, get ready to roll the dice,see if you still have those tricks up your sleeve, because ELECTRA presents GAME OF KINGS- an online Ludo competition to flex your luck and skills.</>,
            long: <>ELECTRA invites all students of 3rd semester of NIT Silchar to have fun in this online ludo event. So, come and join us in this exhilarant event.<br/>
            Date: 9th August<br/>
            Time: 6 pm onwards<br/><br/>
            Registration Form: https://forms.gle/oYeAVGHXPEYsmd7WA<br/><br/>
            Deadline to fill the form is 8 August, 11 pm .<br/>
            More details regarding the event and rules will be shared in the Whatsapp Group. We hope for a positive turnaround of people.
            “Play smart, win smart.”</>,

        },
        {
            index: "3",
            heading: "Electra Bind",
            image: "img/3.jpeg",
            short: <>Online classes are exhausting and the past few months have been very hard for all of us. The various Battle Royale and Shooting games have become a part and parcel of our online routine, allowing us to blow off some steam with our friends. <br/><br/>
            “A warrior is known by his deeds, not his mouth.” - Astra, Valorant.<br/><br/>
            There is a big fanbase of Valorant in NIT Silchar and we at ELECTRA have noticed this craze among the students too. So under BLITZSURGE, we present to you all, ELECTRA BIND- a 5v5 Custom Valorant tournament.<br/><br/>
            So it’s time for you to get your guns ready, select your agents and double check your strategies , as Electra Bind is an event open for all and it is not going to be easy.</>,
            long: <>ELECTRA invites Valorant players of NIT Silchar(Each squad must have at least 2 NITS students) to play a 5v5  event  online. So, come and join us in this exhilarant event.<br/>
            Date: 9th and 10th August<br/>
            Time will be announced in the group. <br/><br/>
            Form: https://forms.gle/XtC74LKAxjJk7Dwt9/<br/><br/>
            Deadline to fill the form is 8 August, 11 pm.<br/>
            More details regarding the game and rules will be shared in the Whatsapp Group. Note that only team leaders should fill the form and join the Whatsapp group. We hope for a positive turnaround of people.
            May the best squad win.</>
        },
        {
            index: "4",
            heading: "Queen's Gambit",
            image: "img/4.jpeg",
            short: <>**Queen's Gambit** <br/><br/>
            The game is won in the mind. Use your mind to its optimal level if you want to live life on a new level. Chess is a war over the board, holding its masters in its own bond, shackling the mind and brain and crushing the opponent's mind. <br/><br/>
            To perk up this event, Blitzsurge brings to you 'Queen's Gambit', a breath-taking competition of chess, where you can use your strategy and tactics to protect your king and conquer your enemy.  </>,
            long: <>ELECTRA invites all chess players of NIT Silchar to play this chess tournament online. So, come and join us in this exhilarant event.<br/>
            Date: 10th August<br/>
            Time: 11 am onwards<br/><br/>
            Platform: lichess<br/>
            (For more convenience, participants are requested to create their account in lichess.org beforehand)<br/><br/>
            Eligibility: All students of NIT Silchar<br/>
            Form: https://forms.gle/aUJDmnQkWRhW5pDSA<br/><br/>
            Deadline to fill the form is 8 August, 11 pm.<br/>
            More details regarding the rules will be shared in the WhatsApp Group. We hope for a positive turnaround of people.<br/>
            So, what are you waiting for? Make your move, master your mind and be the champion.</>
        },
        {
            index: "5",
            heading: "MindKraft",
            image: "img/5.jpeg",
            short: <>"Winning isn't everything, it's the only thing."<br/>
            Everyone is smart until they get beaten by someone smarter! Think of yourself being smart enough to beat everyone and climb up to the top? Here's where you can showcase your smartness. <br/><br/>
            Electra Society brings to you MINDKRAFT,an evening filled with a bunch of interesting question sets from a wide range of domains where you need to be aware of what's happening around you, think out of the box, and reason accordingly.</>,
            long: <>Some rules to be followed:<br/>
            ● Each team should have 3 members at maximum.<br/>
            ● The first round will be the preliminary round. It will be open for all.<br/>
            ● The top 8 teams will then be selected for the final round.<br/>
            ● The preliminary round will be conducted through Google forms.<br/>
            ● The final round will be conducted on Discord.<br/><br/>
            Eligibility: Students from UG 3rd Semester, all branches, NIT Silchar<br/><br/>
            Preliminary round: 11th August, 7 P.M. The Google Form will be shared in the Whatsapp group.<br/>
            Final round: 12th August,6 P.M. The discord link will be provided beforehand.<br/>
            Further information on the rules will be circulated.<br/><br/>
            Get ready to feel that adrenaline rush in your body .<br/>
            Team Registration link: https://forms.gle/m5JoHBdwBm2AkXew8<br/><br/>
            Only the team leaders need to fill the form on behalf of their teams.<br/><br/>
            Deadline: 10th August 11.59PM</>
        },
        {
            index: "6",
            heading: "Meme War",
            image: "img/6.jpeg",
            short: <>“How many memes did you come across today? How many you shared? How many got added to your gallery?” <br/><br/>
            Hello folks!! As we are in an internet age where enthralling meme culture revolves around us, we often find ourselves not to skip out any meme piece we come across while scrolling through social media. Depicting instances and scenarios of day to day lives in an amusing way, with humour meld in it, it does make them super captivating.<br/><br/>
            Creating meme is as enthralling as watching them and sharing the funniest of them with our friends .Let us expand the meme culture further by creating exciting memes! </>,
            long: <>Under the banner of ELECTRA SOCIETY, we bring to you a stirring event ‘MEME WAR’.<br/><br/> 
            ***Meme War Rules***<br/>
            Theme - Section F vs Section G<br/>
            1.Deadline- 13th August, 11:59 pm <br/>
            2. Memes should be only made on the given theme. <br/>
            3. Memes should not be vulgar. <br/>
            4. One student can submit as many memes. <br/>
            5. You can fill the form once only, so upload all the memes at once. <br/>
            6. All the memes will be displayed on 14th August during the Meme War meet and the best 3 will be chosen.<br/><br/>
            Time of the event: 6:30 pm onwards<br/>
            The Google Meet link will be shared via the whatsapp groups.</>
        },
        {
            index: "7",
            heading: "Who Killed Sara?",
            image: "img/7.jpeg",
            short: <>“Congratulations Sherlock, you just solved the case. Or did you?”<br/><br/>
            Sara’s been missing for the past ten days and with little to no evidence of her being alive, the police are in a hurry to declare her dead. With her now presumably dead, and the police losing hope of ever finding her body and solving her case, the need of the hour is a group of intellectual detectives.<br/><br/>
            With just a handful of clues and little time on hand, this might just be an impossible case. Do you believe that you have it in yourself to solve this case? Can you look for the hidden clues and find Sara? Well, the stage is yours then as ELECTRA society calls for the smartest detectives of NIT Silchar to crack this unsolved mystery.</>,
            long: <>Form a group of maximum five members or venture alone and look for the hidden clues. Conjure your inner Sherlock and help us solve this mystery. <br/><br/>
            Date: 13th August<br/>
            Time: 6 pm onwards<br/>
            Form: https://forms.gle/3uayAVaqtdHoEVc9A<br/>
            Deadline for registration: 11th August, 2021, 11:00 pm.<br/>
            Members: Solo or group of maximum 5, depends upon the participant.<br/><br/> 
            More details regarding the event  and rules will be shared in the Whatsapp Group. Note that only the teamleader should fill the form and join the Whatsapp group. We hope for a positive turnaround of people.<br/><br/>
            Where did Sara go? Is she still alive? If not, then, Who Killed Sara?</>
        },
        {
            index: "8",
            heading: "OPEN MIC",
            image: "img/8.jpeg",
            short: <>***** OPEN MIC*****<br/><br/> 
            "If you can speak , you can influence. If you can influence , you can change lives." <br/><br/> 
            There are certain things in which mediocrity is not to be endured, such as public speaking, poetry, music. It's not the speech that is remembered but the feeling that you made them feel through your speech.</>,
            long: <>Yes you guessed it right, another delightful event that BLITZSURGE brings to you is 'Open mic',  where you can showcase your talent in music or poem recitation or a give an enthralling speech on any social event or issue or even make us laugh harder with your witty jokes.<br/><br/>  
            So come on, be a part of this event, bring out your talent and explore yourself with your love for music and sense of humour.  <br/><br/> 
            Date and Time: 14th August, 6:30 pm onwards<br/>
            Platform : Google meet<br/><br/> 
            The link for Google Meet will be shared via the whatsapp groups.<br/><br/> 
            Eligibility : All students of Electrical Department, NIT Silchar <br/><br/> 
            Life runs at its own pace so spare some time and rejoice the moment.</>
        }
    ]

    const Events = Lists.reverse()

    return (
        <>
        <div className="container-fluid px-0" style={{overflowX: "hidden"}}>
        <div className="separator">
            <div className="line"></div>
            <h2 style={{fontVariant: "small-caps"}}>Upcoming Events</h2>
            <div className="line"></div>
        </div>
            {Events.map(events => {
                return(
                    <div key={"Event" + events.index}>
                        <div className="row no-gutters">
                            <div className="col-md-1"></div>
                            <div className="col-md-10" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>
                                <div style={{padding:"0 30px"}}>
                                    <h3 style={{borderBottom: "2px solid black",fontVariant: "small-caps"}}>{events.heading}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-1"></div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center"
                                style={{textAlign:"center",padding:"30px"}}>
                                <img className="img-fluid" style={{borderRadius: "5%"}} src={events.image} alt="Electra"/>
                            </div>
                        <div className="col-md-6 mt-lg-3 mt-0" style={{textAlign:"center",overflowX:"hidden",alignSelf: "center"}}>
                            <p style={{textAlign:"justify",padding:"0 30px",fontSize:"1rem"}}>
                            {events.short}
                            </p>
                            <button
                                        id="btn1"
                                        type="button"
                                        className={"btn btn-outline-dark expand" + events.index}
                                        onClick={() => Expand(events.index)}
                                        style={{ width: "150px" }}
                                    >
                                        Read more
                            </button>
                        </div>
                        <div className="col-md-1"></div>
                        </div>
                        <div
                                className="row no-gutters"
                                id={"Expand" + events.index}
                                style={{ display: "none" }}
                            >
                                <div className="col-md-1"></div>
                                <div
                                    className="col-md-10"
                                    style={{ textAlign: "center", overflowX: "hidden" }}
                                >
                                    <p
                                        style={{
                                            textAlign: "justify",
                                            fontSize: "1.1rem",
                                            padding: "0 30px",
                                        }}
                                    >
                                        {events.long}
                                    </p>
                                    <button
                                        id="btn2"
                                        type="button"
                                        className="btn btn-outline-dark mx-3"
                                        onClick={() => Shrink(events.index)}
                                    >
                                        Show less
                                    </button>
                                    <button className="btn btn-outline-dark" onClick={opensweetalert}>Register Now</button>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                    </div>
                )
            })}
        </div>     
        </>
    )
}

export default UpcomingEvent
