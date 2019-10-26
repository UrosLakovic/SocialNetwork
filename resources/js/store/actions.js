import {postAPI} from '../resource';

export const loadInitialPostsAction = 
({commit}, payload)=> postAPI.get().then(posts=>commit('loadInitialPostsMutation', posts));