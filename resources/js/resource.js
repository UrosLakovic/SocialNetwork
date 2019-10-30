export const postAPI = {
    get(id=null, page) {
        return axios.get('posts' + (id ? `/${id}`:''), { 
                params: {
                    page
                }
        }).then(({data})=>data)
    }
}
export const userAPI = {
    get(id=null) {
        return axios.get('users' + (id ? `/${id}`:'')).then(({data})=>data)
    }
}
