  import React, { useState, useEffect } from 'react';
  
function GetData() {
  
  const getData=()=>{
    fetch('db.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(products) {
        console.log(products);
      });
  }
  
  useEffect(()=>{
    getData()
  },[])

}

export default GetData;