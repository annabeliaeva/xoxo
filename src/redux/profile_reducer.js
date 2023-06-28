import { faker } from "@faker-js/faker"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const LIKE_POST = "LIKE-POST"

let initialState = {
    postData: [
        {
            id: 1, fullName: "Anna Belyaeva", avatar: "https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg",
            message: faker.lorem.text(), likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 5
        },
        {
            id: 2, fullName: "Anna Belyaeva", avatar: "https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg",
            message: faker.lorem.text(), likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 10
        },
        {
            id: 3, fullName: "Anna Belyaeva", avatar: "https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg",
            message: faker.lorem.text(), likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 15
        },
    ],
    newPostText: 'anna'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {
                    id: 4, fullName: faker.person.fullName(),
                    avatar: faker.image.avatar(), message: state.newPostText,
                    likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 0
                }],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case LIKE_POST:
            return {
                ...state,
                postData: state.postData.map(u => { return u.id === action.id ? {...u, likesCount: ++u.likesCount} : u })
            }
        default:
            return { ...state }
    }
}

export const addPostActionCreater = () => ({ type: 'ADD-POST' })

export const updateNewPostTextActionCreater = (postText) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    text: postText
})

export const likePostAC = (postId) => ({
    type: 'LIKE-POST', id: postId
})

export default profileReducer
