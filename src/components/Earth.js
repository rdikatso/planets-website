import React from 'react'
import Profile from './Profile'

export default function Earth({ data, screen }){

    return(
        <div className="earth">
            <Profile data={data} screen={screen}/>
        </div>
    )
}