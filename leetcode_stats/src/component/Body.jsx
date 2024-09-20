import React, { useEffect } from 'react'
import { useState } from 'react'
import { LC_URL } from '../utils/constants'
import './body.css'
import Profile from './Profile'

function Body() {
    const [userName, setUserName] = useState([]);
    const [UserList, setUserList] = useState([]);

    // console.log(userName);
    // useEffect(()=>{
    //     fetchData();

    // },[userName])
    // let count=0;
   
    


    return (
        <>
        <div className='body'>
                <input 
                    type="text" 
                    className="user-input"
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                
            <button className='submit-btn'
            
            onClick={()=>{
                const fetchData = async () => {
                    const Url = LC_URL + userName;
                    const data = await fetch(Url);
                    const json = await data.json();
                    // console.log(json);
                    console.log(1);
                    setUserList(json);
                   // console.log(json.totalSolved);
                    //console.log(json.recentSubmissions[0].title); 
                    console.log(2);
                }
                fetchData();
                // console.log(UserList);
                console.log(3);
                
            }}
            >Check Your Stats</button>
        </div>
        <div className='profile-cont'>
            { <Profile totalQuestion={UserList.totalSolved} 
            // recent={UserList.recentSubmissions[0].title}
            easy={UserList.easySolved}
            medium={UserList.mediumSolved}
            hard={UserList.hardSolved}
            />         }
        </div>
        </>
    )
}

export default Body
