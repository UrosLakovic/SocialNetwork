<template>
    <div class="border border-gray-400 px-4 py-4 mx-8 my-8 shadow-md h-64 rounded-lg hover:shadow-lg cursor-pointer">
        <div>
            {{ post.title }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: Object
    }
}
</script>