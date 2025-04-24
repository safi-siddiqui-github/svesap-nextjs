'use server';

import { getCookie } from '@/actions/authActions';
import axios from 'axios';

const axiosUtils = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
  withCredentials: true, // ✅ required for cookies/session
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// Interceptor to attach token dynamically
axiosUtils.interceptors.request.use(async (config) => {
  const { token } = await getCookie();

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default axiosUtils;
