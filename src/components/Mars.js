import React from 'react'
import Profile from './Profile'

export default function Mars({ data, screen }){
    return(
        <div className="mars">
            <Profile data={data} screen={screen}/>
        </div>
    )
}