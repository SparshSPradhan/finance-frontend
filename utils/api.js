import axios from "axios";


const localurl="http://localhost:5008/transactions"
const vercelurl="https://finance-backend-sparsh.vercel.app/transactions"
const api = axios.create({
  baseURL: "https://finance-backend-sparsh.vercel.app",
});

export default api;
