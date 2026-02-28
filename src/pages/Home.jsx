import React, { useEffect, useState } from 'react'
import { getDocs,collection, deleteDoc,doc } from 'firebase/firestore';
import { db } from '../firebase';

const Home = ({isAuth}) => {
  
    const [postList,setPostList] = useState([]);
    const postsCollectionRef = collection (db,"posts")

    useEffect(() =>{
      const getPosts = async() =>{
        const data = await  getDocs(postsCollectionRef)
        console.log(data.docs.map((doc) =>({...doc.data(),id: doc.id})));
      }
      getPosts();
    })

    const deletepost= async(id)=>{
      const postDoc = doc(db,"post",id )
      await deleteDoc(postDoc)
    }


  return (  <div className='homepage'>
    {postList.map((post)=>{
      return<div className='post'> 
      <div className='postHead'>
        <div className='title'><h1>{post.title}</h1>
        </div> 
        <div className='deletepost'>

          {isAuth && post.author.id === auth .currentuser.uid &&<button onClick={()=>{deletepost(post.id)}}>&#128465;</button>
        </div>
      </div>
      <div className='postTextContainer'>{post.postText}</div>
      <h3>@{post.author.name}</h3>
      </div>
      
    })}

    </div>
  )
}

export default Home