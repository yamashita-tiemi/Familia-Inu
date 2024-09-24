import api from "../api/api";

export async function cadastro(data: any) {
    try {
        await api.post('/signup',data);
    } catch (error) {
        console.log(error);
    }
}