import axios from "axios";
const API = "http://localhost:3000/api";

export const signupRequest = (user) => axios.post(`${API}/signup`, user);