import api from "../api/api";

export async function getPerfil() {
    const token = localStorage.getItem('TOKEN');
    try {
        return await api.get('/user/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.log(error);
        alert("ERRO AO ACESSAR PERFIL");
        window.location.href = '/login';
    }
}