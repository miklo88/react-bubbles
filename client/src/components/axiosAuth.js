import axios from 'axios';

// We are going to create an Axios configuration that attaches an Authorization: <token> header to requests. In order to do that, 
// we will create a new file called axiosAuth.js. Whenever the application needs to exchange data with a protected endpoint, it will import this module, instead of the usual import axios from "axios";.
export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};
