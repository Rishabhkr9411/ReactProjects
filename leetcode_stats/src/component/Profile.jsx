import React from 'react'

const  Profile=(props)=> {
    console.log(props);
    // console.log(ques);
    // const {resData}=props;
    // console.log(resData);
    return (
        <>
            <div>
                <ul>
                    <li>totalQuestion: {props.totalQuestion}</li>
                    <li>EasyQuestion: {props.easy}</li>
                    <li>MediumQuestion: {props.medium}</li>
                    <li>HardQuestion: {props.hard}</li>
                    <li>Last Submission:{props.recent}</li>

                </ul>
            </div>
           
            <h1>{}</h1>
            
        </>
    )
}

export default Profile
