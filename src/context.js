import { createContext, useCallback, useContext, useEffect, useState } from "react"

const token = process.env.REACT_APP_TOKEN;
const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        data: {},
        initialUser: true
    });
    const [listOfRepos, setListOfRepos] = useState([]);
    const [listOfGists, setListOfGists] = useState([]);
    const [listOfActivities, setListOfActivities] = useState([]);
    const [userName, setUserName] = useState('defvol');
    const [loading, setLoading] = useState(false);
    const [searchUserName, setSearchUserName] = useState('');
    const [searchedUsersList, setSearchedUsersList] = useState([]);


    const getUserData = useCallback(async () => {
        setLoading(true);
        try {
            const userApi = `https://api.github.com/users/${userName}`;
            const reposApi = `https://api.github.com/users/${userName}/repos`
            const gistsApi = `https://api.github.com/users/${userName}/gists`;
            const activityApi = `https://api.github.com/users/${userName}/received_events`;

            const headers = {
                "Authorization": `token ${token}`
            }

            const result1 = await fetch(userApi, {
                "method": "GET",
                "headers": headers
            })
            const userData1 = await result1.json();

            const result2 = await fetch(reposApi, {
                "method": "GET",
                "headers": headers
            })
            const repos = await result2.json();

            const result3 = await fetch(gistsApi, {
                "method": "GET",
                "headers": headers
            })
            const gists = await result3.json();

            const result4 = await fetch(activityApi, {
                "method": "GET",
                "headers": headers
            })
            const activities = await result4.json();

            setUserData({
                ...userData,
                data: userData1
            });
            setListOfRepos(repos);
            setListOfGists(gists);
            setListOfActivities(activities);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [userName])



    const searchUser = async () => {
        try {
            const headers = {
                "Authorization": `token ${token}`
            }
            const searchApi = `https://api.github.com/search/users?q=${searchUserName}`;
            const result = await fetch(searchApi, {
                "method": "GET",
                "headers": headers
            })
            const users = await result.json();

            setSearchedUsersList(users.items);            
            
        } catch (error) {
            console.log(error);
        }
    }


 
    useEffect(() => {
        searchUser();
    }, [searchUserName]);

    useEffect(() => {
        getUserData();
    }, [getUserData]);


    return (
        <AppContext.Provider value={{
            userData,
            setUserData,
            listOfRepos,
            loading,
            listOfGists,
            listOfActivities,
            setUserName,
            setSearchUserName,
            searchedUsersList,
            setSearchedUsersList,

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider }