<template>
    <div class="app">
        <post-list @likedPost="likedPost" @removePost="removePost" :posts="posts"></post-list>
    </div>
</template>

<script>
import postList from '../cmps/post-list.cmp.vue'


export default {
    data() {
        return {

        }
    },
    components: {
        postList,
    },
    created() {

    },
    methods: {
        removePost(postId) {
            console.log(postId)
            this.$store.dispatch({ type: 'removePost', postId })
        },
        likedPost(postId) {
            this.$store.dispatch({ type: 'likedPost', postId })
        }

    },
    computed: {
        posts() {
            return this.$store.getters.postsToDisplay
        }
    }
}
</script>

<style>
</style>