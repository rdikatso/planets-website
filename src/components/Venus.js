import React from 'react'
import Profile from './Profile'

export default function Venus({ data,screen }){
    return(
        <div className="venus">
            <Profile data={data} screen={screen}/>
        </div>
    )
}