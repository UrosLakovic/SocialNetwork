import {userAPI} from '../../../resource';

export const loadUserAction = 
({commit}) => userAPI.getSingleUser(1).then(user => commit('loadUserMutation', user));