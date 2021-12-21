import React from 'react'
import Profile from './Profile'

export default function Saturn({ data,screen }){
    return(
        <div className="saturn">
            <Profile data={data} screen={screen}/>
        </div>
    )
}