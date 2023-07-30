import Tile from "./Tile.jsx";
import "./PlayTiles.css"
import {useEffect, useState} from "react";

export default function PlayTiles(){
    const [reset, setReset] = useState(false);

    const handleReset = () => {
        setReset(true);
    }

    useEffect(()=>{
        if (reset){
            setReset(false);
        }
    }, [reset])

    return (
        <div className={"grid grid-cols-3 gap-5 overflow-hidden p-4 lg:p-16"}>
            <Tile color={'orange'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>C</p>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>A</p>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>:)</p>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>R</p>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>L</p>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <button className={'btn'} onClick={handleReset}>
                    Reset
                </button>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>Y</p>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>A</p>
            </Tile>
            <Tile color={'blue'} reset={reset}>
                <p className={'text-3xl lg:text-6xl font-semibold'}>N</p>
            </Tile>

        </div>
    )
}
