import { faker } from "@faker-js/faker";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case SEND_MESSAGE:
            return {
                ...state,
                updatedMessage: '',
                messagesData: [...state.messagesData, { id: 4, message: state.updatedMessage, isMine: true, name: faker.person.firstName() }]
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                updatedMessage: action.newMessage
            }
        default:
            return { ...state }
    }
}

export let sendMessageActionCreator = () => ({ type: 'SEND-MESSAGE' })

export let updateMessageActionCreator = (text) => ({
    type: 'UPDATE-MESSAGE-TEXT',
    newMessage: text
})

export default dialogsReducer