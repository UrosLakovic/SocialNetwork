export const postAPI = {
    get(page) {
        return axios.get('posts', { 
                params: {
                    page
                }
        }).then(({data})=>data)
    },
    getSinglePost(id) {
        return axios.get(`posts/${id}`).then(({data})=>data)
    }
}
export const userAPI = {
    get() {
        return axios.get('users').then(({data})=>data)
    },
    getSingleUser(id) {
        return axios.get(`users/${id}`).then(({data})=>data)
    }
}
