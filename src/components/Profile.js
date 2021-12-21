
import React from 'react'
import { useState } from 'react';
import sourceIcon from '../images/icon-source.svg'
import  '../css/Profile.css';
import  '../css/App.css';

function Profile({ data, screen }){
    const [status, setStatus] = useState("overview");

    const showOverview = status === "overview";
    const showInternal = status === "internal";
    const showSurface = status === "surface";


    let content;
    let imageSource;
    let link;

    if(showOverview){
        content = data[0].overview.content;
        imageSource = data[0].images.planet;
        link = data[0].overview.source;
    }
    if(showInternal){
        content = data[0].structure.content;
        imageSource = data[0].images.internal;
        link = data[0].structure.source;
    }
    if(showSurface){
        content = data[0].geology.content;
        imageSource = data[0].images.planet;
        link = data[0].geology.source;
    }

    function handleOverViewClick(){
        setStatus('overview');
    }
    function handleInternalClick(){
        setStatus('internal');
    }
    function handleSurfaceClick(){
        setStatus('surface');
    }

    return(
        <>  
            <div className="planet">
                <img className="img" src = {imageSource} alt="mercury"/>
                { showSurface ? <img className = "geology" src = {data[0].images.geology} alt= "surface geology"/> : null}
                <div className="planet-content">
                    <h1>{data[0].name}</h1>
                    <p className="content-para">{content}</p>
                    <div className="links">
                        <p>Source : <span>Wikipedia</span></p>
                        <a href={link}>
                            <img src = {sourceIcon} className="source-icon"alt="source icon"/>
                        </a>
                    </div>
                    <div className="btn">
                        <button className={showOverview ? "active-btn" : ''} onClick = {handleOverViewClick}><span className="first">01</span><span>Overview</span></button>
                        <button className={showInternal ? "active-btn" : ''} onClick = {handleInternalClick}><span>02</span><span> {screen > 376 ? 'Internal Structure': 'Structure'}</span></button>
                        <button className={showSurface ? "active-btn" : ''} onClick = {handleSurfaceClick}><span>03</span><span>{screen > 376 ? 'Surface Geology': 'Surface'}</span></button>
                    </div>
                    {(screen < 376) ? <div className="underline"></div> : null}
                    
                    
                </div>
            </div>
            <div className="planet-facts">
                <div>
                    <p>Rotation Time </p> 
                    <h1>{data[0].rotation}</h1>
                </div>
                <div>
                    <p>Revolution Time</p>
                    <h1>{data[0].revolution}</h1>
                </div>
                <div>
                    <p>Radius</p> 
                    <h1>{data[0].radius}</h1>
                </div>
                <div>
                    <p>Average Temp.</p>
                    <h1>{data[0].temperature}</h1>
                </div>
            </div>
            
        </>
    )
}

export default Profile