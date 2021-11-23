import React from 'react'
import { SearchedUser } from '../components/SearchedUser';
import { useGlobalContext } from '../context';
import classes from './Search.module.css';

export const Search = () => {
    const { setSearchUserName, searchedUsersList } = useGlobalContext();

    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(8);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    // get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // if (searchedUsersList) {   
    //     const currentPosts = searchedUsersList.slice(indexOfFirstPost, indexOfLastPost);
    // }



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
