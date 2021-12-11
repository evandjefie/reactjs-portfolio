import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList"; // Is called to 
import { useState } from "react";
import { useEffect } from "react";

import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    beatPortfolio,
    devopsPortfolio,
    designPortfolio
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");

    const [data, setData  ] = useState([]);

    const listFeatures = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "beat",
            title: "Uk/NY/Exotic Drill Beat",
        },
        {
            id: "devops",
            title: "Devops",
        },
        {
            id: "design",
            title: "Logo and Flyer",
        }
    ]

    useEffect(()=>{
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "beat":
                setData(beatPortfolio);
                break;
            case "devops":
                setData(devopsPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }
    },[selected])
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                listFeatures.map((item)=>(
                            <PortfolioList
                            id={item.id}
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected} />
                    ))
                }
            </ul>
            <div className="container">
                {
                    data.map((d)=>(
                        <div className="item">
                            <img 
                            src={d.img} 
                            alt=""/>
                            <h3>{d.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

