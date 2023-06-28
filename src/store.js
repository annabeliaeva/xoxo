import { faker } from "@faker-js/faker"

export const state = {
    profile_page: {
        postData: [
            {
                id: 1, fullName: "Anna Belyaeva", avatar: "https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg",
                message: 'Hello, I am using WhatsApp', likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 5
            },
            {
                id: 2, fullName: "Anna Belyaeva", avatar: "https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg",
                message:  'Hello, I am using Telegram', likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 10
            },
            {
                id: 3, fullName: "Anna Belyaeva", avatar: "https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg",
                message:  'Hello, I am using Vk', likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 15
            },
        ],
        newPostText: 'anna'
    },
    dialogs_page: {
        dialogsData: [
            { id: 1, name: faker.person.fullName() },
            { id: 2, name: faker.person.fullName() },
            { id: 3, name: faker.person.fullName() },
            { id: 4, name: faker.person.fullName() },
            { id: 5, name: faker.person.fullName() },
            { id: 6, name: faker.person.fullName() },
        ],
        messagesData: [
            { id: 1, message: faker.lorem.sentence(), isMine: true, name: faker.person.firstName() },
            { id: 2, message: faker.lorem.sentence(), isMine: false, name: faker.person.firstName() },
            { id: 3, message: faker.lorem.sentence(), isMine: true, name: faker.person.firstName() }
        ],
        updatedMessage: 'New message'
    },
    users_page: {
        users: [{
            id: 1, avatar: faker.image.avatar(), fullName: faker.person.fullName(), age: '18', sex: faker.person.sex(),
            location: { country: faker.location.country(), city: faker.location.city() }, is_friend: false
        },
        {
            id: 2, avatar: faker.image.avatar(), fullName: faker.person.fullName(), age: '30', sex: faker.person.sex(),
            location: { country: faker.location.country(), city: faker.location.city() }, is_friend: false
        },
        {
            id: 3, avatar: faker.image.avatar(), fullName: faker.person.fullName(), age: '50', sex: faker.person.sex(),
            location: { country: faker.location.country(), city: faker.location.city() }, is_friend: true
        },
        {
            id: 4, avatar: faker.image.avatar(), fullName: faker.person.fullName(), age: '33', sex: faker.person.sex(),
            location: { country: faker.location.country(), city: faker.location.city() }, is_friend: false
        },
        {
            id: 5, avatar: faker.image.avatar(), fullName: faker.person.fullName(), age: '19', sex: faker.person.sex(),
            location: { country: faker.location.country(), city: faker.location.city() }, is_friend: false
        }]
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
