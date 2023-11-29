export interface ListResponse {
    list: ListData[];
}

export interface ListData {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}