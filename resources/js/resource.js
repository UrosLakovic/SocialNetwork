export const postAPI = {
    get(id=null) {
        return axios.get('posts' + (id ? `/${id}`:'')).then(({data})=>data)
    }
}
export const userAPI = {
    get(id=null) {
        return axios.get('users' + (id ? `/${id}`:'')).then(({data})=>data)
    }
}
export const ratingAPI = {
    get(id=null) {
        return axios.get('ratings' + (id ? `/${id}`:'')).then(({data})=>data)
    }
}