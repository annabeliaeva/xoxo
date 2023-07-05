
import React, { useState } from "react";
import { state as oldState } from '@/store.js'
import MyPosts from "./MyPosts";
import { faker } from "@faker-js/faker"

export const MyPostsContainer = (props) => {

  const [newState, setPostData] = useState(props.state)

  const addPost = () => {
    setPostData(state => {
      return {
        profile_page: {
          ...state.profile_page,
          newPostText: '',
          postData: [{
            id: 4, fullName: faker.person.fullName(),
            avatar: faker.image.avatar(), message: state.profile_page.newPostText,
            likeImage: "https://e7.pngegg.com/pngimages/22/527/png-clipart-heart-open-free-content-heart.png", likesCount: 0
          }, ...state.profile_page.postData,]
        }
      }
    })
  }

  const changePostText = (text) => {
    setPostData(state => {
      return {
        profile_page: {
          ...state.profile_page,
          newPostText: text
        }
      }
    })
  }

  let likePost = (id) => {
    setPostData(state => {
      return {
        profile_page: {
          ...state.profile_page,
          postData: state.profile_page.postData.map(u => u.id === id ? { ...u, likesCount: ++u.likesCount } : u)
        }
      }
    })
  }

  return <MyPosts
    updateNewPostText={changePostText} addPost={addPost}
    postData={newState.profile_page.postData} newPostText={newState.profile_page.newPostText} likePost={likePost} />
}



