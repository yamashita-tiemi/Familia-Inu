import api from "../api/api";

export async function validateUser() {
    const token = localStorage.getItem('TOKEN');
    console.log("TOOOOOKEN", token)

    let res = await api.post('user/auth',{
        headers: {
          'Authorization': `Bearer ${token}`
        }
    });
    console.log(res);

}