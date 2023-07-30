import "./Tile.css"
import {useEffect, useState} from "react";

export default function Tile({color = "blue", reset, children}) {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setIsHovered(false);
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    useEffect(()=> {
        if (reset){
            setIsClicked(false);
            setIsHovered(false);
        }
    }, [reset])

    return (
        <div className={'relative'}>

            <div
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`tile tile-${color} ${isClicked ? "tile-clicked" : ""} ${isHovered ? "tile-hovered" : ""}`
            }
            >
                <div className={`tile tile-overlay ${isClicked ? '' : 'hidden'}`}>
                </div>
            </div>
            <div  className={`tile-content ${isClicked?"reveal":''} -z-10 ${isClicked?"":"hidden"}`}>{children}</div>
        </div>
    )
}
