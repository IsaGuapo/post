import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import axios from 'axios';

const Home = ()=> {

    const [post, setPost] = useState([]);
    const arr = [];

    useEffect(() => {
        const getPost = async () =>{
          try{
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
          
            const limit = resp.data.slice(0,5)//slice para limitar a 5 resultados los post
            console.log(limit.length)

            for (let i=0; i<limit.length;i++){
             arr.push(
              {
                title: limit[i].title,
                userId: limit[i].userId,
                body: limit[i].body
              })
             setPost(arr)    
  
            }  
              
            } catch (e){
                console.log(e)
            } 
          }
        
          getPost();
        },[]);
        console.log(post)

  const paintPost = () => {
            return post.map((card, i) => <Cards post={card}  key={i} />)
          } 
        
//funcion para setear el post
  const handleSubmit =(e) =>{
    e.preventDefault();

  } 

    return (
        <div className='div_container'>
          <h1> Post´it</h1>
          <form onSubmit={handleSubmit}>
        <p>Busca post por usuario</p>
        <input type="text" placeholder='id de usuario'/> 
        <input type="button" value="Filtrar"/> 
        {post? paintPost(): ""}
      </form>
        </div>
        
      );
}

export default Home;