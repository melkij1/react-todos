import React from 'react'
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item/post-list-item'



const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {
  function isEmpty(obj) {
      for(let key in obj)
      {
          return true;
      }
      return false;
  }

  return (
    <ListGroup className="app-list">
      {posts && posts.map((post) => {
        if(typeof post === 'object' && isEmpty(post)){
          return <PostListItem 
            key={post.id} 
            {...post} onDelete={() => onDelete(post.id)}
            onToggleImportant={() => onToggleImportant(post.id)}
            onToggleLike={() => onToggleLike(post.id)}/>
        }else {
          return false
        }
      }
        // <PostListItem key={i} {...post}/>
      )}
    </ListGroup>
  )
}

export default PostList
