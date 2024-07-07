import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  console.log(postList);
  return <>
    {postList.map((post) => <Post key={post.id} post={post}/>)}
  </>
}
export default PostList;