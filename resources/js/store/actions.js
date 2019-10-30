import {postAPI} from '../resource';
import {userAPI} from '../resource';


export const loadInitialPostsAction = 
({commit}, payload)=> postAPI.get(null,1).then(posts=>commit('loadInitialPostsMutation', posts));
export const loadInitialUsersAction = 
({commit}, payload)=> userAPI.get().then(users=>commit('loadInitialUsersMutation', users));
export const loadMorePostsAction = 
({commit, state}, payload) => {
    return new Promise((resolve, reject) => {
        postAPI.get(null, state.page).then(posts => {
            if(posts.length){
                commit('pageIncrementMutation');
                commit('loadMorePostsMutation', posts);
                resolve(posts);
            } else reject();
        })
    })
}
