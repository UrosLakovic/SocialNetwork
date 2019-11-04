<template>
    <div class="container flex-1 mx-auto px-10 py-4 w-3/4 bg-gray-100 rounded border-double border-8 border-gray-400 overflow-auto">
        <ul>
            <post
            v-for="post in user.posts"
            :post="post"
            :key="post.id"
            />
        </ul>
    </div>
</template>
<script>
    import ProfilePost from './ProfilePost';
    import {mapActions} from 'vuex';
    import {mapState} from 'vuex';

export default {
    components: {
            Post: ProfilePost
        },
        methods: {
            ...mapActions('profile', [
                'loadUserAction'
            ])
        },
        computed: {
            ...mapState({
                user: state => state.profile.user,
            })
        },
        created(){
            this.loadUserAction();
        }
}
</script>