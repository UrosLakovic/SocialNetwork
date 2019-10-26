<template>
    <div class="container mx-auto px-10 py-4 w-3/4 bg-gray-200 h-full rounded border-double border-8 border-gray-400">
        <ul>
            <post
            v-for="post  in posts"
            :post="post"
            :key="post.id"
            />
        </ul>
    </div>
</template>

<script>
    import Post from './Post';
    import {mapActions} from 'vuex';
    import {mapState} from 'vuex'

    export default {
        components: {
            Post: Post
        },
        methods: {
            ...mapActions([
                'loadInitialPostsAction'
            ])
        },
        computed: {
            ...mapState({
                posts: state => state.posts
            })
        },
        created(){
                this.loadInitialPostsAction();
            }
    }
</script>