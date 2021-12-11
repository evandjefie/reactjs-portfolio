import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 3000,
            backSpeed: 60,
            strings: ["Full-Stack", "Designer", "Beatmaker", "Gamer" ],
            });
    });

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/man2.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I am</h2>
                    <h1>Evan DJEFIE</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrowD.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
