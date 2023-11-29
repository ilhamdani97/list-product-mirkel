import { API, axiosRequest } from "../utils/api";

export async function getList(size: string) {
    
    const response = await axiosRequest({
        method: 'GET',
        url: API.getList,
        params:{
            limit: size
        }
    })

    return response?.data || null;

}

export async function getDetailList(id: number) {
    const response = await axiosRequest({
        method: 'GET',
        url: API.getListDetail(id)
    })

    return response?.data || null;
}

export async function addNewList() {

}