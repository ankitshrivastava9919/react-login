import React from 'react'
import "./Test.css";
import { Avatar } from '@material-ui/core';
import { useEffect, useState } from "react";
import axios from 'axios'
import Todo from './Todo';


export default function Test() {
    const [seed, setseed] = useState("");
    const [profileImage, setProfileImage] = useState("");

    const profileData = async () => {
        try {
            const res = await axios.get(`https://picsum.photos/id/${seed}/info`);
            setProfileImage(res.data.picture.large);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setseed(Math.floor(Math.random() * 1000));
    }, []);

    useEffect(() => {
        profileData();
    }, []);

    return (
        <>
            <div className="test">
                <div className="clr" >
                    <div className="task">
                        <h1><img height="90px" src="data:image/png;base64,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" />
TasksBoard</h1>
                    </div>
                </div>
                <div className=" profile_pic">
                    <img ononline={() => profileData()} src={profileImage} style={{ width: "100%" }} />
                    {/* <Avatar/> */}
                </div>
                <div className="box">
                    <h4>My Tasks</h4>
                    <div className="task__table">
                        <Todo/>
                    </div>
                </div>
            </div>

        </>
    )
}
