import React from 'react'
import Profile from './Profile'


export default function Mercury({ data, screen }){
    return(
        <div className="mercury">
            <Profile data={data} screen={screen}/>
        </div>
    )
}


