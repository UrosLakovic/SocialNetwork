<template>
    <div class="container flex-1 mx-auto px-10 py-4 w-3/4 bg-gray-100 rounded border-double border-8 border-gray-400 overflow-auto">
        <ul>
            <post
            v-for="post  in posts"
            :post="post"
            :key="post.id"
            />
        </ul>
        <infinite-loading @infinite="infiniteHandler">
            <div slot="no-more" class="font-semibold text-gray-600 text-center">Sorry, no more posts..</div>
        </infinite-loading>
    </div>
</template>

<script>
    import Post from './Post';
    import {mapActions} from 'vuex';
    import {mapState} from 'vuex';
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        components: {
            Post: Post,
            InfiniteLoading
        },
        methods: {
            ...mapActions([
                'loadInitialUsersAction',
                'loadMorePostsAction'
            ]),
            infiniteHandler(loadingState) {
                this.loadMorePostsAction().then(response => {
                    loadingState.loaded();
                    })
                    .catch(reason => {
                        loadingState.complete();
                    })
            }
        },
        computed: {
            ...mapState({
                posts: state => state.posts,
                users: state => state.users,
                page: state => state.page,
                full: state => state.full
            })
        },
        /*created(){
                this.loadInitialPostsAction();
                this.loadInitialUsersAction();
            }*/
    }
</script>