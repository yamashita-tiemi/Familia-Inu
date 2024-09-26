import api from "../api/api";

export async function login(data: any) {

    try {
        let res = await api.post('/login',data);
        localStorage.setItem('TOKEN', res.data.token);
        window.location.href = '/perfil/tutor';

    } catch (error) {
        console.error(error);
        alert("Usuario ou senha incorreto.")
    }
}