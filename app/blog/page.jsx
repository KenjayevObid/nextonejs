"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';

const MyComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
        setData(response.data);
      } catch (error) {
        console.log(error);
      } 
    };
    fetchData();
  }, []); 



  return (
    <div >
      
        
        <Post  data={data}/>
    
    </div>
  );
};

export default MyComponent;
