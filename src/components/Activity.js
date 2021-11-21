import React from 'react'
import classes from './Activity.module.css';

export const Activity = (props) => {
    const activity = props.activity;
    var ts = new Date(activity.created_at);


    return (
        <li className={classes.activity}>
            <div>                
                <h5>Actor: {activity.actor.display_login}</h5>
                <p>Created at: {ts.toDateString()}</p>
            </div>
            <div>
                <div>
                    <img src={activity.actor.avatar_url} alt="actor" />
                </div>
                <p>Type: {activity.type}</p>
            </div>
        </li>
    )
}
