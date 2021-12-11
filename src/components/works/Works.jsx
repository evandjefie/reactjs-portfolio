import "./works.scss"
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }
    const data = [
        {
            id: "1",
            icon: "/assets/music/nostressSTUDIO.png",
            title: "Dev web & mobile",
            desc:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
            img:"/assets/devops/docker.png",
        },
        {
            id: "2",
            icon: "/assets/music/nostressSTUDIO.png",
            title: "Devops",
            desc:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
            img:"/assets/devops/docker.png",
        },
        {
            id: "3",
            icon: "/assets/music/nostressSTUDIO.png",
            title: "Beatmaking",
            desc:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
            img:"/assets/devops/nostressSTUDIO.png",
        },
    ];

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {
                data.map((d)=>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt=""/>
                            </div>                                            
                        </div>                            
                    </div>
                    ))
                }
            </div>
            <img src="/assets/arrowL.png" className="arrow left" onClick={()=>handleClick("left")} alt=""/>
            <img src="/assets/arrowR.png" className="arrow right" onClick={()=>handleClick()} alt=""/>
        </div>
    );
}
