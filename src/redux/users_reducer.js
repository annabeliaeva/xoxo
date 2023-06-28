
let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    return (u.id === action.userId) ? { ...u, is_friend: true } : u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    return (u.id === action.userId) ? { ...u, is_friend: false } : u
                })
            }
        case 'SET-USERS':
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return { ...state }
    }
}

export const followAC = (userId) => ({ type: 'FOLLOW', userId })
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsersAC = (users) => ({ type: 'SET-USERS', users })

export default usersReducer