import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db ,auth} from '../firebase'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {


 const [title,setTitle] = useState("")
 const [postText,setPostText] = useState("")

const postsCollectionRef = collection (db,"posts")
let navigate = useNavigate();
const createPost = async () =>{

await addDoc(postsCollectionRef,{title,postText,author:{name:auth.currentUser.displayName  ,id:auth.currentUser.uid },
});

navigate("/")

}

useEffect(() => {
  if (!isAuth) {
    navigate("/login");
  }
}, [isAuth, navigate]); 


  return (
    <div className='createpost'>
      <div className='cpContainer'>
        <h1>create a post</h1>
        <div className='inputgp'>
          <label>Title</label>
          <input placeholder='title' onChange={(event)=>{setTitle(event.target.value)}} />
        </div>      
         <div className='inputgp'>
          <label>post</label>
          <textarea placeholder="post..." onChange={(event)=>{setPostText(event.target.value)}} /> 
         </div>
         <button onClick={createPost}>submit post</button>
      </div>


    </div>
  )
}



export default CreatePost
