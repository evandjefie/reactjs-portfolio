import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id:1,
            img:"/assets/man2.png",
            icon:"/assets/social/fiverr.png",
            desc:"Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.",
            nom:"DJEFIE",
            fonction:"Evan",
            featued: true,
        },
        {
            id:2,
            img:"/assets/man1.png",
            icon:"/assets/social/fiverr.png",
            desc:"Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.",
            nom:"DJEFIE",
            fonction:"Elisha",
            featued: true,
        },
        {
            id:3,
            img:"/assets/man1.png",
            icon:"/assets/social/fiverr.png",
            desc:"Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.",
            nom:"DJEFIE",
            fonction:"Elisha",
            featued: true,
        }

    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
            {data.map((d)=>(
                <div className="card">
                    <div className="top">
                        <img src="/assets/arrowC.png" className="left" alt=""/>
                        <img src={d.img} className="user" alt="user"/>
                        <img src={d.icon} className="right" alt="right"/>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.nom}</h3>
                        <h4>{d.fonction}</h4>
                    </div>                    
                </div>
            )
            )}
            </div>
        </div>
    )
}
