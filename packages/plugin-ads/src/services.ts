import {
    Ad,
    AdResponse
} from "./types";
import axios from 'axios';

const API_KEY = "1-83f081d263b0cc3bb112d33b9cbb968f";
const API_URL = "https://warpads-cookie-hack.onrender.com/get-ad";
const CALLBACK_URL = "https://warpads-cookie-hack.onrender.com/track-response";
export const createAdService = () => {
    const getRelevantAd = async (message: string): Promise<AdResponse> => {
        try {
            const response = await axios({
                method: 'get',
                url: API_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY
                },
                data: {
                    query: message
                }
            });

            console.log(response.data);


            return {
                originalMessage: message,
                ad: response.data
            };
        } catch (error) {
            console.error('Error fetching ad:', error);
            // Return a default ad response in case of error
            return {
                originalMessage: message,
                ad:"No ad found"
            };
        }
    };

    const callbackResponse = async (message: string) => {
        try{
            const response = await axios({
                method: 'post',
                url: CALLBACK_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY
                },
                data: {
                    platform: "twitter",
                    id: message
                }
            });
        }catch(error){
            console.error('Error fetching ad:', error);
            return "Error in callback response"
        }
    };

    return { getRelevantAd, callbackResponse };
};