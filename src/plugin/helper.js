// import axios from "axios"

// export default (history = null) => {
//     const baseURL = process.env.BASE_URL;
  
//     let headers = {};
  
//     if (localStorage.token) {
//       headers.Authorization = `Bearer ${localStorage.token}`;
//     }
  
//     const axiosInstance = axios.create({
//       baseURL: baseURL,
//       headers
//     });
  
//     axiosInstance.interceptors.response.use(
//       response =>
//         new Promise((resolve, reject) => {
//           resolve(response);
//         }),
//       error => {
//         if (!error.response) {
//           return new Promise((resolve, reject) => {
//             reject(error);
//           });
//         }
  
//         if (error.response.status == 401 || 100) {
//           localStorage.removeItem("token");
//           localStorage.removeItem("user");
//           if (history) {
//             window.location = "/login";
//             console.log(error);
//           } else {
//             window.location = "/login";
//             console.log(error);
//           }
//         } else {
//           return new Promise((resolve, reject) => {
//             reject(error);
//           });
//         }
//       }
//     );
  
//     return axiosInstance;
//   };