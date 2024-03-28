import 'react'
import './MainPage.css'

export  default function MainPage(prop) {
    return (
            <>
                <div className="mainPage">
                        <h4 className="titleMain"> {prop.title} </h4>
                        <img className="mainPagePic" src={prop.img} />
                        <p className="textMain"> {prop.text1} </p>
                        <p className="textMain"> {prop.text2} </p>
                </div>
            </>
    )
    }