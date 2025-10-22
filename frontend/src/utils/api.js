// API Configuration for Vercel Full-Stack Deployment
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const API_ENDPOINTS = {
  // User endpoints
  USER_LOGIN: `${API_BASE_URL}/api/user/login`,
  USER_REGISTER: `${API_BASE_URL}/api/user/register`,
  USER_LOGOUT: `${API_BASE_URL}/api/user/logout`,
  GET_USER: `${API_BASE_URL}/api/user/getuser`,
  
  // Job endpoints
  GET_ALL_JOBS: `${API_BASE_URL}/api/job/getall`,
  GET_JOB_BY_ID: (id) => `${API_BASE_URL}/api/job/${id}`,
  POST_JOB: `${API_BASE_URL}/api/job/post`,
  GET_MY_JOBS: `${API_BASE_URL}/api/job/getmyjobs`,
  UPDATE_JOB: (id) => `${API_BASE_URL}/api/job/update/${id}`,
  DELETE_JOB: (id) => `${API_BASE_URL}/api/job/delete/${id}`,
  
  // Application endpoints
  POST_APPLICATION: `${API_BASE_URL}/api/application/post`,
  GET_EMPLOYER_APPLICATIONS: `${API_BASE_URL}/api/application/employer/getall`,
  GET_JOBSEEKER_APPLICATIONS: `${API_BASE_URL}/api/application/jobseeker/getall`,
  DELETE_APPLICATION: (id) => `${API_BASE_URL}/api/application/delete/${id}`,
};

export default API_BASE_URL;
