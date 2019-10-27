import {postAPI} from '../resource';
import {userAPI} from '../resource';
import {ratingAPI} from '../resource';

export const loadInitialPostsAction = 
({commit}, payload)=> postAPI.get().then(posts=>commit('loadInitialPostsMutation', posts));
export const loadInitialUsersAction = 
({commit}, payload)=> userAPI.get().then(users=>commit('loadInitialUsersMutation', users));
export const loadInitialRatingsAction = 
({commit}, payload)=> ratingAPI.get().then(ratings=>commit('loadInitialRatingsMutation', ratings));