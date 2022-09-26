
import axios from 'axios';
import {useState, useEffect } from 'react';
import './App.css';
import Items from './Items';


function App() {
   const [product , setProduct]= useState([]);
   const getProductApi = async ()=>{
     try{
       const responce = await axios.get('https://devapi.2gathers.com/api/events/list-events/?userId=5');
       console.log(responce.data.listOfHostEvents)
       setProduct(responce.data.listOfHostEvents)
     }catch(err){
       console.log(err)
     }
    
   }
   useEffect(() => {
     getProductApi();
   }, [])
  return (
   <div>
  
    {product.map(data=>{
      return <Items eventName= {data.eventName} 
            date ={data.eventStartDate}
      eventDescription={data.eventDescription}
      
      />
    })}
   
   </div> 
  );
}

export default App;
