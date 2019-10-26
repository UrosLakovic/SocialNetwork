export const postAPI = {
    get(id=null) {
        return axios.get('posts' + (id ? `/${id}`:'')).then(({data})=>data)
    }
}