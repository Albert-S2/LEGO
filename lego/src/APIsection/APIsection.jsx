'use client'
import './APIsection.css';
import React from 'react';
import {useState} from 'react';

export default function CommentSection () {
   const [newItem, setNewItem] = useState("")
   const [comments, setcomments] = useState([])

   function handleSubmit(e) {
        e.preventDefault()

        setcomments(currentcomments => {
            return [
                ...currentcomments, 
                { id: crypto.randomUUID(), 
                title: newItem, completed: false}
            ]
        })

        setNewItem("")
   }

function togglecomment(id, completed) {
    setcomments(currentcomments => {
        return currentcomments.map(comment => {
            if (comment.id === id) {
                return { ...comment, completed }
            }
        return comment
        })
    })
}

function deletecomment(id) {
    setcomments(currentcomments => {
        return currentcomments.filter(comment => comment.id !== id)
    })
}

return (
    <div className="commentpage">
    <form onSubmit={handleSubmit} className="new-form">
        <div className="form-row">
            <label htmlFor="item">How do you like this set?<br /></label>
            <input className="inputBox"
                value={newItem} 
                onChange={e => setNewItem(e.target.value)}
                type="text" 
                id="item" 
            />
        </div>
        <button className="btn">Add</button>
    </form>
    <h4 className="opinions">Other Opinions</h4>
    <ul className="list">
  {comments.length === 0 && "No Opinions Stored"}
  {comments.map(comment => {
    return (
      <li key={comment.id}>
        <div className="comment-item">
          <span className={`comment-title ${comment.completed ? 'completed' : ''}`}>
            {comment.title}
          </span>
          <a>   </a>
            <button 
              onClick={() => deletecomment(comment.id)}
              className="btn-danger"
            >
              X
            </button>
        </div>
      </li>
    );
  })}
</ul>
    </div>
    
)
}












