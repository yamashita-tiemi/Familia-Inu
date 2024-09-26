// services/apiService.ts
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://familia-inu-service-ts-152415784515.us-east1.run.app'
})

export default instance;