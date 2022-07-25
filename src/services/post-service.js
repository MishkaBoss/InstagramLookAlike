
import { storageService } from './async-storage-service'
import { utilService } from './util.service.js'
import postJSON from '../data/post.json' assert {type: 'json'}

const KEY = 'postDB';

export default {
    query,
    getById,
    remove,
    save,
    getEmptyPost,
    likedPost
}

_createPosts()


function query() {
    return storageService.query(KEY)
}

function getById(id) {
    return storageService.get(KEY, id)
}

function remove(id) {
    return storageService.remove(KEY, id)
}

function save(post) {
    const savedPost = (post._id) ? storageService.put(KEY, post) : storageService.post(KEY, post)
    return savedPost
}

function likedPost(postId, loggedInUser){
    // get the post by id 
    return getById(postId).then((post)=> {
        // then check if the property 'likedBy' contains the user id object
       let idx =  post.likedBy.findIndex(user => user._id === loggedInUser._id)
       // if it's there remove it
       if(idx !== -1) {
        post.likedBy.splice(idx, 1)
        // else add it
       } else {
        post.likedBy.push(loggedInUser)
       }
    })
}

function getEmptyPost(name = '', price = 100) {
    return {
        _id: '',
        txt,
        imgUrl,
        createdAt,
        by: {
            _id: '',
            fullname: 'mockuser',
            imgUrl:'https://robohash.com/s'
        }
    }
}


// Create Test Data:
function _createPosts() {
    var posts = JSON.parse(localStorage.getItem(KEY))
    if (!posts || !posts.length) {
        posts = postJSON
        localStorage.setItem(KEY, JSON.stringify(posts))
    }
    return posts;
}

function _createPost(name) {
    const post = getEmptyPost(name, utilService.getRandomInt(80, 300))
    post._id = utilService.makeId()
    return post
}



