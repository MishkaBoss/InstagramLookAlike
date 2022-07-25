<template>
    <div class="post-list-container" v-for="post in posts" :key="post._id">
        <post-preview @likedPost="$emit('likedPost', $event)" @removePost="$emit('removePost', $event)" :post="post">
        </post-preview>

    </div>
</template>

<script>
import postPreview from './post-preview.cmp.vue'
import postsData from '../data/post.json'
export default {
    emits: ['likedPost', 'removePost'],

    props: {
        posts: Array
    },
    data() {
        return {

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