import classes from './User.module.css';
import { IoLocationSharp } from 'react-icons/io5';
import { useGlobalContext } from '../context';
import Tabs from '../components/Tabs';
import { useEffect } from 'react';


export const User = () => {
    const { listOfRepos, listOfGists, listOfActivities, userData, setUserName, setSearchedUsersList } = useGlobalContext();
    const { data, initialUser } = userData;


    useEffect(() => {
        const pathname = window.location.pathname;
        if (initialUser === false && pathname === '/') {
            setUserName('defvol');            
        }
    }, [initialUser, setUserName]);

    useEffect(() => {
        setSearchedUsersList([]);
    }, []);

    const tabsItems = [
        {
            title: 'List of Repos',
            treeItems: listOfRepos
        },
        {
            title: 'Gists',
            treeItems: listOfGists
        },
        {
            title: 'Activity',
            treeItems: listOfActivities
        }
    ];

    const {
        avatar_url,
        bio,
        name,
        company,
        location,
        followers,
        following,
        html_url } = data;



    return (
        <>
            {userData &&
                <div className={classes.user}>
                    <div className={classes.leftSide}>
                        <img src={avatar_url} alt="user" />
                        <h3>{name}</h3>
                        <p><span style={{
                            'fontWeight': 'bold',
                            'color': '#777'
                        }}>Bio: </span> {bio}</p>
                        <div className={classes.locationInfo}>
                            <p><IoLocationSharp />{location}</p>
                            <div>
                                <h5>Company</h5>
                                <p>{company}</p>
                            </div>
                        </div>
                        <div className={classes.followItems}>
                            <a href={html_url} className={classes.button} target="_blank" rel="noreferrer">Follow</a>
                            <ul>
                                <li>
                                    <p style={{ 'fontWeight': 'bold' }}>{followers}</p>
                                    <p>FOLLOWERS</p>
                                </li>
                                <li>
                                    <p style={{ 'fontWeight': 'bold' }}>{following}</p>
                                    <p>FOLLOWING</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.rightSide}>
                        {(listOfRepos || listOfGists || listOfActivities) &&
                            <Tabs tabsItems={tabsItems} />
                        }
                    </div>
                </div>
            }
        </>
    )
}
