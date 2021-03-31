

import client, {configureClient, resetClient} from './client'

export const login = credentials => {

    return client.post('http://localhost:3001/api/auth/login', credentials).then(({ accessToken }) => {
        configureClient({accessToken});
        localStorage.setItem('token', accessToken);
    });

};

// export const logoutReset = () =>{
//     resetClient();
//     localStorage.removeItem('token');
// }

export const logout = () =>{
    return Promise.resolve().then(()=>{
        resetClient();
        localStorage.removeItem('token');
    })
}