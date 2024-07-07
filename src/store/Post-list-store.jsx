import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { }
});

function postListReducer(currentList, action) {
  let newPostList = currentList;
  console.log("In reducer ", action);
  if (action.type === 'DELETE_POST') {
    newPostList = currentList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentList];
  }
  console.log("newPostList", newPostList);
  return newPostList;
}

const DEFAULT_POST_LIST = [{
  id: '1',
  title: 'Abc',
  body: 'Abc is going to India.',
  reactions: 5,
  userId: 'user-5',
  tags: ['Abc', 'India']
},
{
  id: '2',
  title: 'Def',
  body: 'Def is joining some company.',
  reactions: 15,
  userId: 'user-12',
  tags: ['Def', 'Joining']
}];

const PostListContextProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  function addPost(userId, postTitle, postBody, reactions, tags) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags
      }
    })
  }

  function deletePost(postId) {
    console.log("item to be deleted -", postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      }
    })
  }
  const value = { postList, addPost, deletePost };
  return <PostListContext.Provider value={value}>
    {children}
  </PostListContext.Provider>

}

export default PostListContextProvider;