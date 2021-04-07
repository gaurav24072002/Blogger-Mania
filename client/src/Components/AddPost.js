import React,{useState} from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import axios from 'axios'

function AddPost() {
    const [title,settitle]=useState('')
    const [auth,setauth]=useState('')
    const [desc,setdesc]=useState('')
    const [msg,setmsg]=useState('')

    function handleSubmit(e){
      e.preventDefault()
      const blog={
        title:title,
        desc:desc,
        auth:auth
      }

      axios.post('/add-post',blog)
      .then(res=>setmsg(res.data))
      .catch(err=>console.log(err))

    }
    return (
        <div>
            <Navbar/>
            <div className='container' >
            <h2 className='m-5 text-center' >Add Post to Your Blog Page</h2>
           <form className='col-md-5 mx-auto' onSubmit={handleSubmit} >
                <h5 className='p-3 text-center text-white' >{msg}</h5>
                <div className="form-group">
                  <label >Title :</label>
                  <input type="text" value={title} className="form-control" onChange={(e)=>{settitle(e.target.value)}} placeholder="Enter title" required />
                </div>
                <div className="form-group">
                  <label >Author</label>
                  <input type="text" value={auth} className="form-control" onChange={(e)=>{setauth(e.target.value)}} placeholder="Enter Name of Author" required />
                </div>
                <div className="form-group">
                  <label >Description</label>
                  <textarea type="text" rows='9' value={desc} className="form-control" onChange={(e)=>{setdesc(e.target.value)}} placeholder="Enter Your Blog" required />
                </div>
            
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/post' className='btn btn-dark ml-4' >Back to Home Page</Link>
            </form>
            
 
        </div>
        </div>
    )
}

export default AddPost
