import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
 import "./Home.css";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getPosts();
  }, []); 

  const deletePost = async (id) => {
      await deleteDoc(doc(db, "posts", id));
      setPostList((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="homepage">
      {postList.map((post) => {
  const isOwner =
    isAuth &&
    auth.currentUser &&
    post.author &&
    post.author.id === auth.currentUser.uid;

  return (
    <div className="post" key={post.id}>
      <div className="postHead">
        <div className="title">
          <h1>{post.title}</h1>
        </div>

        <div className="deletepost">
          {isOwner && (
            <button onClick={() => deletePost(post.id)}>
              🗑
            </button>
          )}
        </div>
      </div>

      <div className="postTextContainer">
        {post.postText}
      </div>

      <h3>@{post.author?.name || "Unknown User"}</h3>
    </div>
  );
})}
    </div>
  );
};

export default Home;
