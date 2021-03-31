

import client, {configureClient} from './client'

export const login = credentials => {

    return client.post('http://localhost:3001/api/auth/login', credentials).then(({ accessToken }) => {
        configureClient({accessToken});
    });

};