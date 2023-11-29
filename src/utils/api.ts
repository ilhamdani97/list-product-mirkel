import axios from "axios";

const URL = 'https://fakestoreapi.com/';
export const API = {
    getList: `${URL}products`,
    getListDetail: (id: number) => `${URL}products/${id}`,
};

interface PropsRequest {
    url?: string;
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    payload?: any;
    params?: any;
}
export const axiosRequest = async ({
    url,
    method,
    payload,
    params
}: PropsRequest) => {
    try {
        const response = await axios(
            {
                method: method,
                url: url,
                data: payload,
                params
            }
        );

        return response;
 
    } catch (e: any) {
        window.alert('Error API')
       
    }
}