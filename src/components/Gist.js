import React from 'react'
import { BiGitRepoForked } from 'react-icons/bi';
import classes from './Gist.module.css';

export const Gist = (props) => {
    const gist = props.gist;

    return (
        <li className={classes.gist}>
            <h5>Description: <span style={{'fontWeight': 'normal'}}>{gist.description}</span></h5>
            <div>
                <p>Created at: {gist.created_at}</p>
                <div>
                    <BiGitRepoForked color={'#2181f7'} />
                    <a href={gist.html_url} target="_blank" rel="noreferrer">link</a>
                </div>
            </div>
        </li>
    )
}
