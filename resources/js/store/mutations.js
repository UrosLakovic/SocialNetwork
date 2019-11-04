export const pageIncrementMutation = (state) => state.page += 1;
export const loadMorePostsMutation = (state, posts) => state.posts.push(...posts);