import React from 'react'
import { SearchedUser } from '../components/SearchedUser';
import { useGlobalContext } from '../context';
import classes from './Search.module.css';

export const Search = () => {
    const { setSearchUserName, searchedUsersList } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className={classes.searchForm}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <label>Search Github Profile</label>
                    <input type='text' onChange={(e) => setSearchUserName(e.target.value)} />
                </form>
            </div>
            <div className={classes.searchedUsers}>
                <div className={classes.searchedUsersCenter}>
                    {searchedUsersList && searchedUsersList.map((item) => <SearchedUser key={item.id} {...item} />)}
                </div>
            </div>
        </>
    )
}
