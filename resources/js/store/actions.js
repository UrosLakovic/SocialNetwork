import {postAPI} from '../resource';

export const loadMorePostsAction = 
({commit, state}) =>
        postAPI.get(state.page).then(posts => {
            if(posts.length){
                commit('pageIncrementMutation');
                commit('loadMorePostsMutation', posts);
                return (posts);
            } else throw 'No more posts';
        });