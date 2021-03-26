import client from './client';

const adsBaseUrl = 'http://localhost:8000/api/';

export const getAds = () => {
  
    const url = `${adsBaseUrl}/adverts`;
  return client.get(url);
};



