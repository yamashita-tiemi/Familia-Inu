import api from "../api/api";

export async function validateUser() {
    const token = localStorage.getItem('TOKEN');
    let res = await api.post('user/auth',null,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
    });
    return res

}

export async function validateAdmin() {
  const token = localStorage.getItem('TOKEN');
  let res = await api.post('admin/auth',null,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
  });
  return res

}