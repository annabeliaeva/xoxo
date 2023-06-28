
import React, { useState } from "react";
import { state as oldState } from '@/store.js'
import MyPosts from "./MyPosts";
import { faker } from "@faker-js/faker"

// КОНТЕЙНЕРНАЯ КОМПОНЕНТА, 
// ЗАДАЧА - ОТРИСОВАТЬ ПРЕЗЕНТАЦИОННУЮ И УДОВЛЕТВОРИТЬ ЕЕ НУЖДЫ
const MyPostsContainer = () => {

  const [state, setPostData] = useState(oldState)

  const addPost = () => {
    setPostData(oldState => {
      return {
        ...oldState,
        profile_page: {
          ...oldState.profile_page,
          newPostText: '',
          postData: [...oldState.profile_page.postData, {
            id: 4, fullName: faker.person.fullName(),
            avatar: faker.image.avatar(), message: oldState.profile_page.newPostText,
            likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 0
          }]
        }
      }
    })
  }

  const changePostText = (text) => {
    setPostData(state => {
      return {
        ...state,
        profile_page: {
          ...state.profile_page,
          newPostText: text
        }
      }
    })
  }


  let likePost = (id) => {
    // dispatch(likePostAC(id))
  }

  return <MyPosts
    updateNewPostText={changePostText} addPost={addPost}
    postData={state.profile_page.postData} newPostText={state.profile_page.newPostText} likePost={likePost} />
}

export default MyPostsContainer;