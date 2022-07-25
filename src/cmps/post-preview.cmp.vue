<template>
    <section class="post-preview">
        <div class="post-header">
            <div class="left-header">
                <p class="user-img">
                    <img class="story-circle" src="../styles/img/user-image-story-circle.png" alt="">
                    <span class="span">
                        <img class="user-img-post" :src="post.by.imgUrl" alt="">
                    </span>
                </p>
                <p class="user-name">{{ post.by.fullname }}</p>
            </div>
            <div class="right-header">
                <more-options-icon @click="$emit('removePost', post._id)"></more-options-icon>
            </div>
        </div>
        <div class="post-body">
            <img class="post-img" :src="post.imgUrl">
            <div class="post-actions">
                <div class="left-actions">
                    <a>
                        <notifications-icon @click="doLike" :isLiked="isLiked">
                        </notifications-icon>
                    </a>
                    <a>
                        <comment-icon></comment-icon>
                    </a>
                    <a>
                        <direct-icon></direct-icon>
                    </a>
                </div>
                <div class="right-actions">
                    <a>
                        <saved-icon></saved-icon>
                    </a>
                </div>
            </div>
        </div>
        <div class="post-details">
            <p class="likes">{{ post.likedBy.length }} likes</p>
            <div class="description">
                <p class="post-by">{{ post.by.fullname }}</p>
                <p class="post-txt">{{ post.txt }}</p>
            </div>
            <p class="all-comments">View all {{ post.comments.length }} comments</p>
            <p class="post-timestamp">13 HOURS AGO</p>
        </div>
        <div class="add-comment">
            <div class="left-comment-section">
                <div class="emoji-keyboard">
                    <emoji-icon></emoji-icon>
                </div>
                <input class="new-comment-field" type="text" placeholder="Add a comment...">
            </div>
            <div class="right-comment-section">
                <button class="add-comment-btn">Post</button>
            </div>
        </div>
        <img src="" alt="">
    </section>
</template>

<script>
import notificationsIcon from '../assets/icons/notifications-icon.cmp.vue'
import commentIcon from '../assets/icons/comment-icon.cmp.vue'
import directIcon from '../assets/icons/direct-icon.cmp.vue'
import savedIcon from '../assets/icons/saved-icon.cmp.vue'
import emojiIcon from '../assets/icons/emoji-icon.cmp.vue'
import moreOptionsIcon from '../assets/icons/more-options-icon.cmp.vue'


export default {
    emits: ['likedPost', 'removePost'],
    props: {
        post: {
            type: Object,
        },
    },
    data() {
        return {
        }
    },
    created() {

    }, methods: {
        doLike() {
            this.$emit('likedPost', this.post._id)
        }
    },
    computed: {
        isLiked() {
            let loggedInUser = this.$store.getters.user
            let idx = this.post.likedBy.findIndex(user => user._id === loggedInUser._id)
            return idx === -1 ? false : true
        }
    },
    components: {
        notificationsIcon,
        commentIcon,
        directIcon,
        savedIcon,
        emojiIcon,
        moreOptionsIcon,
    },
}
</script>

<style>
</style>