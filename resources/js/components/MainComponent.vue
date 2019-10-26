<template>
    <div class="container mx-auto px-10 py-4 w-3/4 bg-gray-200 h-screen rounded border-double border-8 border-gray-400">
        <post></post>
    </div>
</template>

<script>
    import Post from './Post';

    export default {
        components: {
            Post: Post
        }
    }
</script>