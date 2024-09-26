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

export async function editarPerfil(tutor: {name: string, email: string; number: string}) {

    // DA ERRO 500 ATUALMENTE
    const token = localStorage.getItem('TOKEN');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    try {
        return await api.put('/user/edit', tutor, config);
    } catch (error) {
        console.log(error);
        alert("ERRO AO EDITAR PERFIL");
    }
}


export async function getPetsCliente() {
    const token = localStorage.getItem('TOKEN');
    const userId = localStorage.getItem('USERID');

    if(userId){
        try {
            return await api.get('/pet/usuario/' + userId, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
            alert("ERRO AO ACESSAR PETS DO CLIENTE");
        }
    }

}

export async function cadastroPet(pet: any) {
    const token = localStorage.getItem('TOKEN');
    try {
        return await api.post('/pet', pet, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.log(error);
        alert("ERRO AO ACESSAR PETS DO CLIENTE");
    }

}