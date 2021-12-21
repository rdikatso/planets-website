import React from 'react'
import Profile from './Profile'

export default function Uranus({ data, screen }){
    return(
        <div className="uranus">
            <Profile data={data} screen={screen}/>
        </div>
    )
}