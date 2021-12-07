import React from 'react'
import { useState } from 'react';
import sourceIcon from '../images/icon-source.svg'


function Profile({ data }){

    const [overview, setOverView] = useState(true);
    const [internal, setInternal] = useState(false);
    const [surface, setSurface] = useState(false);
    const [showSurfaceImg, setShowSurfaceImg] = useState(false);

    let content;
    let imageSource;
    let link;

    if(overview){
        content = data[0].overview.content;
        imageSource = data[0].images.planet;
        link = data[0].overview.source;
    }
    if(internal){
        content = data[0].structure.content;
        imageSource = data[0].images.internal;
        link = data[0].structure.source;
    }
    if(surface){
        content = data[0].geology.content;
        imageSource = data[0].images.planet;
        link = data[0].geology.source;
    }

    function handleOverViewClick(){
        setOverView(true);
        setInternal(false);
        setSurface(false);
        setShowSurfaceImg(false);
    }
    function handleInternalClick(){
        setOverView(false);
        setInternal(true);
        setSurface(false);
        setShowSurfaceImg(false);
    }
    function handleSurfaceClick(){
        setOverView(false);
        setInternal(false);
        setSurface(true);
        setShowSurfaceImg(true);


    }

    return(
        <>  
            <div className="planet">
                <img src = {imageSource} alt="mercury"/> 
                { showSurfaceImg ? <img className = "geology" src = {data[0].images.geology} alt= "surface geology"/> : null}
                {console.log(data[0].images.planet)}
                <div>
                    <h1>{data[0].name}</h1>
                    <p>{content}</p>
                    <div>
                        <p>Source : Wikipedia</p>
                        <a href={link}>
                            <img src = {sourceIcon} className="source-icon"alt="source icon"/>
                        </a>
                    </div>  
                    <button onClick = {handleOverViewClick}>01 Overview</button>
                    <button onClick = {handleInternalClick}>02 Internal Structure</button>
                    <button onClick = {handleSurfaceClick}>03 Surface Geology</button>
                </div>
            </div>
            <div className="planet-facts">
                <div><p>Rotation Time <br/> {data[0].rotation}</p></div>
                <div><p>Revolution Time<br/> {data[0].revolution}</p></div>
                <div><p>Radius <br/> {data[0].radius}</p></div>
                <div><p>Average Temp. <br/> {data[0].temperature}</p></div>
            </div>
            
        </>
    )
}

export default Profile