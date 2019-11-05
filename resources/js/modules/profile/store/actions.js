import {userAPI} from '../../../resource';

export const loadUserAction = 
({commit}, id) => userAPI.getSingleUser(id).then(user => commit('loadUserMutation', user));