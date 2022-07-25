import Vuex from 'vuex'
import postService from '../services/post-service.js'
import userService from '../services/user-service.js'
const store = Vuex.createStore({
    strict: true,
    state: {
        posts: null,
        filterBy: '',
        user: userService.getLoggedInUser()
    },
    getters: {
        postsToDisplay({ posts }) {
            return posts
        },
        user({user}){
            return user
        }

    },
    mutations: {
        setPosts(state, { posts }) {
            state.posts = posts
        },
        updatePost(state, { post }) {
            const idx = state.posts.findIndex((p) => p._id === post._id)
            state.posts.splice(idx, 1, post)
        },
        addPost(state, { post }) {
            state.posts.unshift(post)
        },
        removePost(state, { postId }) {
            const idx = state.posts.findIndex((p) => p._id === postId)
            state.posts.splice(idx, 1)
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy
        },
        likedPost(state, {postId, loggedInUser}){
            // get the post by id
            let post = state.posts.find(post => post._id === postId)
            if(!post) return 
            // then check if the property 'likedBy' contains the user id object
             let idx =  post.likedBy.findIndex(user => user._id === loggedInUser._id)
             // if it's there remove it
             if(idx !== -1) {
              post.likedBy.splice(idx, 1)
              // else add it
             } else {
              post.likedBy.push(loggedInUser)
             }
        }
    },
    actions: {
        loadPosts({ commit }) {
            postService
                .query()
                .then((posts) => {
                    commit({ type: 'setPosts', posts })
                    console.log(`posts`, posts)
                    
                    return posts
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        savePost({ commit }, { post }) {
            let actionType = post._id ? 'updatePost' : 'addPost'
            return postService
                .savePost(post)
                .then((savedPost) => {
                    commit({ type: actionType, post: savedPost })
                    return savedPost
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        removePost({ commit }, { postId }) {
            return postService
                .remove(postId)
                .then(() => {
                    commit({ type: 'removePost', postId })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        likedPost({state, commit}, {postId}) {
            postService.likedPost(postId, state.user._id).then((isLiked) =>{
                commit({type:'likedPost', postId, loggedInUser: {...state.user}})
            }).catch(console.log)
        }
        // setFilterBy({ commit }, { filterBy }) {
        //     postService.query(filterBy).then((posts) => {
        //         commit({ type: 'setPosts', posts })
        //     })
        // },
    }

})

export default store