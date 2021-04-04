


import client from './client'

export const publishAd = (formValues) => {

    return client.post('http://localhost:3001/api/v1/adverts', formValues)

};

