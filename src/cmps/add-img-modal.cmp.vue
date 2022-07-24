<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-close-button-container">
                <div class="modal-close-btn">
                    <svg aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24"
                        width="18">
                        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                    </svg>
                </div>
            </div>
            <div class="modal-container">
                <div class="modal-header">Create new post</div>
                <div class="modal-body">
                    <div class="modal-details">
                        <add-image-icon></add-image-icon>
                        <p class="modal-description">Drag photos and videos here</p>
                        <button class="modal-select-button button">Select from computer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import addImageIcon from '../assets/icons/add-image-icon.cmp.vue'
export default {
    components: {
        addImageIcon,
    },
}
</script>

<style>
</style>