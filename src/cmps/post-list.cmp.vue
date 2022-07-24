<template>
    <div class="post-list-container" v-for="post in posts" :key="post._id">
        <post-preview :post="post"></post-preview>

    </div>
</template>

<script>
import postPreview from './post-preview.cmp.vue'
import postsData from '../data/post.json'
export default {
    data() {
        return {
            posts: postsData
        }
    },
    components: {
        postPreview,
        postsData,
    },
}
</script>

<style>
</style>