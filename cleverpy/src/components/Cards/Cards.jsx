import React from "react";

const Cards = (props) => {
  return <div>
      <h3>Estos son mis Post</h3>
      <h5>Título: </h5> 
      <p>{props.post.title}</p>
      <h5>Usuario: </h5>
      <p>{props.post.userId}</p> 
      <h5>Post: </h5>
      <p>{props.post.body}</p>
      
  </div>;
};

export default Cards;
