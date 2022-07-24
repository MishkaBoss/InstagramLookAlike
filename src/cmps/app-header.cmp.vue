<template>
    <header class="main-header">
        <div class="header-container">
            <div class="logo-container">
                <img src="../styles/img/instagram-logo.png" alt="instagram-logo" class="logo-img">
            </div>
            <div class="search-container">
                <search-icon class="search"></search-icon>
                <input aria-label="Search Input" type="text" placeholder="Search">
            </div>
            <nav class="nav-bar-container">
                <router-link class="link-btn" to="/">
                    <home-icon></home-icon>
                </router-link>
                <router-link class="link-btn" to="/">
                    <direct-icon></direct-icon>
                </router-link>
                <router-link class="link-btn" to="/">
                    <add-icon></add-icon>
                </router-link>
                <span :class="{ 'activeTab': activeTab === '/explore' }">
                    <router-link class="link-btn" to="/explore">
                        <explore-icon></explore-icon>
                    </router-link>
                </span>
                <router-link class="link-btn" to="/explore">
                    <notifications-icon></notifications-icon>
                </router-link>
                <a @click="toggle" href="" class="dropdown"><img class="user-img-header"
                        src="../styles/img/users/user1.jpg" alt=""></a>
                <div class="dropdown-menu" v-if="active">
                    <ul>
                        <li>Profile</li>
                        <li>Details</li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <add-img-modal></add-img-modal>

</template>

<script>
import homeIcon from '../assets/icons/home-icon.cmp.vue'
import directIcon from '../assets/icons/direct-icon.cmp.vue'
import addIcon from '../assets/icons/add-icon.cmp.vue'
import exploreIcon from '../assets/icons/explore-icon.cmp.vue'
import notificationsIcon from '../assets/icons/notifications-icon.cmp.vue'
import searchIcon from '../assets/icons/search-icon.cmp.vue'
import addImageIcon from '../assets/icons/add-image-icon.cmp.vue'
import addImgModal from '../cmps/add-img-modal.cmp.vue'


export default {
    components: {
        homeIcon,
        directIcon,
        addIcon,
        exploreIcon,
        notificationsIcon,
        searchIcon,
        addImageIcon,
        addImgModal
    },
    data() {
        return {
            active: false,
            activeTab: '/'
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
            console.log(this.active)
        }
    },

}
</script>

<style>
</style>