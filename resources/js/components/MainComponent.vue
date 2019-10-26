<template>
    <div class="container mx-auto px-10 py-4 w-3/4 bg-gray-200 h-screen rounded border-double border-8 border-gray-400">
        <post></post>
        {{$store.state.posts}}
    </div>
</template>

<script>
    import Post from './Post';
    import {mapActions} from 'vuex';

    export default {
        components: {
            Post: Post
        },
        methods: {
            ...mapActions([
                'loadInitialPostsAction'
            ])
        },
        created(){
            this.loadInitialPostsAction();
        }
    }
</script>