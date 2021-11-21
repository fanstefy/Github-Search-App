import React from 'react'
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../context';
import { Loading } from './Loading';
import { User } from './User';
import classes from './UserDetails.module.css';

export const UserDetails = () => {
    const {loading} = useGlobalContext();
    const navigatePage = useNavigate();    

    const navigateBack = () => {
        navigatePage('/search');
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className={classes.userDetails}>
            <button onClick={navigateBack}>back</button>
            <User />
        </div>
    )
}
