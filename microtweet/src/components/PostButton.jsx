import React from 'react'
import '../styles/postButton.css'
export default function PostButton() {
  return (
    <div className='post-button-container'>
      <button className="post-button">
        <span className="post-button__text">Post</span>
      </button>
    </div>
  )
}
