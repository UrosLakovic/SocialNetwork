<template>
    <div class="relative border border-gray-400 px-4 py-4 mx-8 my-8 shadow-md h-64 rounded-lg hover:shadow-xl cursor-pointer">
        <div>
            <div class="font-semibold py-2 m-4">
                Rating: {{ post.rating }}
            </div>
            <div class="text-center">
                {{ post.title }}
            </div>
            <div class="border border-gray-400 rounded-lg mx-16 px-4 py-4 my-4 h-24 overflow-hidden">
                {{ post.body }}
            </div>
            <div class="absolute bottom-0 right-0 mx-4 my-4">
                Posted at: {{ post.created_at }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: Object
    },
}
</script>