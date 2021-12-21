import React from 'react'
import Profile from './Profile'

export default function Jupiter({ data, screen }){
    return(
        <div className="jupiter">
            <Profile data={data} screen={screen}/>
        </div>
    )
}