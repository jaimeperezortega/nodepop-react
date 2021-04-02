import client from './client';

//const adsBaseUrl = 'http://localhost:3001/api/';

export const getAds =  () => {
  
    const url = `http://localhost:3001/api/v1/adverts`;
    const response = client.get(url)
    

    return response
};

export const getAdDetail = adId => {
    const url = `http://localhost:3001/api/v1/adverts/${adId}`;
    const response = client.get(url);

    return response
  };
  



