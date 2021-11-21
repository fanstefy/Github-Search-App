import React from 'react'
import { Loading } from '../components/Loading'
import { User } from '../components/User';
import { useGlobalContext } from '../context'

export const Home = () => {
    const {loading} = useGlobalContext();

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <User />
        </div>
    )
}
