import React from 'react'
import Profile from './Profile'

export default function Neptune({ data, screen }){
    return(
        <div className="neptune">
            <Profile data={data} screen={screen}/>
        </div>
    )
}