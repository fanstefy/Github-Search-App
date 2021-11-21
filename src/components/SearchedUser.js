import React from 'react'
import classes from './SearchedUser.module.css';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../context';

export const SearchedUser = ({id, avatar_url, login}) => {
    const navigatePage = useNavigate();
    const {setUserName, setSearchedUsersList, setUserData, userData} = useGlobalContext();
    
    const navigate = () => {
        setUserName(login);
        setSearchedUsersList([]);
        setUserData({
            ...userData,
            initialUser: false
        });
        navigatePage('/UserDetails');
    }


    return (
        <div className={classes.searchedUser}>
            <img src={avatar_url} alt="user" />
            <p>{login}</p>
            <button onClick={navigate}>details</button>
        </div>
    )
}
