import axios from 'axios'; 

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers:{Authorization: 'Client-ID 97_h7mLW1KTAjGUyjasAfWUs0Nr0EGrQL98zYruxk6Q'}
});