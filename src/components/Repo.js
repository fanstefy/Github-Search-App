import React from 'react';
import { MdVisibility } from 'react-icons/md';
import { BiGitRepoForked } from 'react-icons/bi';
import classes from './Repo.module.css';


export const Repo = (props) => {
    const repo = props.repo;
    var ts = new Date(repo.created_at);


    return (
        <li className={classes.repo}>
            <h5>{repo.name}</h5>
            <div className={classes.repoSection}>
                <div>
                    <BiGitRepoForked />
                    <a href={repo.html_url} target="_blank" rel="noreferrer">link</a>
                </div>
                <p>Created at: {ts.toDateString()}</p>
            </div>
            <div className={classes.repoSection}>
                <p>Language: {repo.language}</p>
                <div>
                    <MdVisibility color={'#f1c574'} size={13} />
                    <p>{repo.visibility}</p>
                </div>
            </div>
        </li>
    )
}
