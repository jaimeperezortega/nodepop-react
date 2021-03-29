import client from './client';

const adsBaseUrl = 'http://localhost:8000/api/';

export const getAds =  () => {
  
    const url = `${adsBaseUrl}/adverts`;
    const response = client.get(url)
    

    return response
};


