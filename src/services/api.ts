import axios, { AxiosRequestConfig } from 'axios';


interface ApiFetchOptions {
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    data?: Record<string, any>;
    pageable?: boolean;
}

// 
export async function apiFetch({
    endpoint,
    method = 'GET',
    data = {},
    pageable = false,
}: ApiFetchOptions): Promise<any> {
    const API_URL = 'https://cogniia.com.br:8000/index.php/wp-json/wp/v2';
    const API_USERNAME = 'cogniia';
    const API_PASSWORD = 'S1stem@sW0rdPRESS';

    const apiUrl = `${API_URL}${endpoint}`;
    const basicAuth = btoa(`${API_USERNAME}:${API_PASSWORD}`);

    const config: AxiosRequestConfig = {
        url: apiUrl,
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${basicAuth}`,
            'Access-Control-Allow-Origin': '*',
            Accept: '*/*'
        },
        data: method !== 'GET' ? data : undefined,
    };

    try {
        const response = await axios(config);

        if (pageable) {
            const totalPages = response.headers['x-wp-totalpages'];
            return {
                data: response.data,
                totalPages,
            };
        }

        return response.data;
    } catch (error: any) {
        console.error('Request error:', error.message);
        throw error;
    }
}