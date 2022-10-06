import { 
    useState,
    createContext,
    useContext,
    useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext();
const AuthUpdateContext = createContext();

const useAuth = () => useContext(AuthContext);
const useAuthUpdate = () => useContext(AuthUpdateContext);


function AuthProvider({children}) {

    const [userData, setUserData] = useState({});

    const storeUserData = async (newUserData) => {
        // console.log("store | New User Data:", typeof newUserData, newUserData)

        if (newUserData === 'clear') {
            // Clear Auth Data
            try {
                // await AsyncStorage.setItem('userData', '{}');
                await AsyncStorage.removeItem('userData');
                setUserData({});
            } catch { 
                console.log(e);
            }
        } else {
            try {
                let oldUserData = await AsyncStorage.getItem('userData');
                // console.log('Old User Data :', typeof oldUserData, ':', oldUserData);
                // console.log('Old User Data Parsed' +
                //     ':', typeof JSON.parse(oldUserData), 
                //     ':', JSON.parse(oldUserData)
                // );
                newUserData = {...JSON.parse(oldUserData), ...newUserData};
                await AsyncStorage.setItem('userData', JSON.stringify(newUserData));
                setUserData(newUserData);
            } catch (e) { 
                console.log(e); 
            }
        }
    };

    const getUserData = async () => {
        try {
            const newUserData = await AsyncStorage.getItem('userData');
            // console.log("New User Data :", typeof newUserData, newUserData);
            // console.log("New User Data Parsed:", typeof JSON.parse(newUserData), JSON.parse(newUserData));
            if (newUserData !== null && newUserData !== '') { 
                setUserData(JSON.parse(newUserData));
            }
        } catch(e) {
            console.log(e);
        }
    }

    const updateUserData = (newUserData) => {
        storeUserData(newUserData);
        getUserData(newUserData);
    };

    useEffect( () => {
        // setUserData(JSON.stringify({}));
        getUserData();
    }, []);


    return (
        <AuthContext.Provider value={userData}>
            <AuthUpdateContext.Provider value={updateUserData}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

export { useAuth, useAuthUpdate, AuthProvider };