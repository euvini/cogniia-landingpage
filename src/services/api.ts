export async function apiFetch({ endpoint, method = 'GET', data = {}, pageble = false }: any) {
    const API_URL = 'https://harpiaconsultoria.com:8000/wp-json/wp/v2' //COLOCAR API COGNIIA
    const API_USERNAME = 'cogniia'
    const API_PASSWORD = 'S1stem@sW0rdPRESS'
    const apiUrl = `${API_URL}${endpoint}`
    const basicAuth = btoa(`${API_USERNAME}:${API_PASSWORD}`)
    try {
        const response = await fetch(apiUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${basicAuth}`,
            },
            body: method !== 'GET' ? JSON.stringify(data) : undefined,
        })
        if (!response.ok) {
            throw new Error(
                `Request error: ${response.status} - ${response.statusText}`
            )
        }
        if (pageble) {
            const totalPages = response.headers.get('X-WP-TotalPages')
            const resp = await response.json()
            return {
                data: resp,
                totalPages
            };
        }
        return await response.json()
    } catch (error: any) {
        console.error('Request error:', error.message)
        throw error
    }
}

// const getNoticia = () => {
//     try {
//         const { noticiaAtualizada }: any = apiFetch({ endpoint: '/posts' });
//         console.log(noticiaAtualizada);
//     } catch (e) {
//         console.log(e)
//     }
// }