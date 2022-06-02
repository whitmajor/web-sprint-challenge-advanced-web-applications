// ✨ implement axiosWithAuth
import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL:"http://localhost:9000/api"
    });
};
export default axiosWithAuth;


/*
Sprint review 
test spinner rendered with on and showed up and if it past with off and 
if it showed up 
set up login, private Route and auth before going into the rest of the sprint
after trim before you send 
use trim method to get rid of white space 

*/