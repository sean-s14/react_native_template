import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";

// Custom
import { useAuth } from '~src/contexts/exports';
import { isObject } from '~src/utils/exports';


const useAuthData = () => {

    const auth = useAuth();

    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [photo, setPhoto] = useState(null);

    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    // useEffect( () => console.log("Access Token :", accessToken), [accessToken])
    // useEffect( () => console.log("Refresh Token :", refreshToken), [refreshToken])
    useEffect( () => console.log("Email:", email), [email]);

    const clearState = () => {
        setEmail(null);
        setUsername(null);
        setPhoto(null); 
    }

    useEffect( () => {
        // eslint-disable-next-line no-unused-vars
        let isMounted = true;
        // console.log("Use Auth Data has mounted...");
        let accessToken = auth?.tokens?.access;
        let refreshToken = auth?.tokens?.refresh;

        if (accessToken) {
            const access = jwt_decode(accessToken);
            setAccessToken(access);

            let email = access?.email;
            email ? setEmail(email) : setEmail('');

            let username = access?.username;
            username ? setUsername(username) : setUsername(''); 

            let photo = access?.imageURI;
            photo ? setPhoto(photo) : setPhoto(''); 
        } else {
            console.log('Setting access token to undefined...');
            setAccessToken(undefined);
            clearState();
        }
        
        if (refreshToken) {
            console.log('Setting refresh token to undefined...');
            setRefreshToken(refreshToken);
        } else {
            setRefreshToken(undefined);
            clearState();
        }

        return () => { isMounted = false };
    }, [auth])

    useEffect( () => {
        console.log("setting loggedIn & setLoading...");
        if (isObject(accessToken) && isObject(accessToken)) {
            if ( 
                (Object.keys(accessToken).length > 0) &&
                (Object.keys(refreshToken).length > 0)
            ) {
                setLoggedIn(true);
                setLoading(false);
            } else {
                setLoggedIn(false);
                setLoading(false);
            }
        } else if ( (accessToken !== null) && (refreshToken !== null) ) {
            setLoggedIn(false);
            setLoading(false);
        }
    }, [accessToken, refreshToken]);

    // useEffect( () => {
    //     if (loading) return;
    //     console.log("email :", email);
    //     console.log("username :", username);
    // }, [loading])


    return {
        isLoading: loading,
        isLoggedIn: loggedIn,
        tokens: accessToken && refreshToken && {
            access: accessToken,
            refresh: refreshToken,
        }, 
        profile: {
            email: email, 
            username: username, 
            photo: photo,
        },
    };
}

export default useAuthData;