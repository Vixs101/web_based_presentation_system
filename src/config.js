import { config } from 'dotenv';

config(); // Load environment variables from the .env file

export const API_KEY = process.env.API_KEY;
export const BASE_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`;