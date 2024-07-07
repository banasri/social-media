import { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";

const CreatePost = () => {

  const { addPost } = useContext(PostListContext);
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postUserIdElement = useRef();
  const postTagsElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const userId = postUserIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = postReactionsElement.current.value;
    const tags = postTagsElement.current.value.split(" ");
    postUserIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    postTagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags);
  }
  return <form className="create-post" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="Your post heading..." />
    </div>

    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea rows='4' ref={postBodyElement} className="form-control" id="body" placeholder="Your post content..." />
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Reactions</label>
      <input type="text" ref={postReactionsElement} className="form-control" id="reactions" />
    </div>
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">User Id</label>
      <input type="text" ref={postUserIdElement} className="form-control" id="userId" />
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input type="text" ref={postTagsElement} className="form-control" id="tags" placeholder="Type hashtags, give spaces between tags" />
    </div>

    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreatePost;