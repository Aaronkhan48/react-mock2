import React, { useEffect, useState } from "react";
import axios from 'axios';

//console.log(response[0].content)
const Quotes = () => {
    const[quote, setQuote] = useState("");

    const quoteAPI = async () =>{
        let arr = [];
    try{
        const{data:response} = await axios.get("https://quotesondesign.com/wp-json/wp/v2/posts/?_fields=content")
        arr = response;
        //console.log(arr[0].content);
    }
    catch(error){
        console.log(error);
    }

    try{
        setQuote(arr[0].content.rendered);
    }catch(error){
        console.log(error);
    }
};
    useEffect(() => {
        quoteAPI();
    }, []);
    
    
    return(
        <h1>
            {quote}
        </h1>
    );
  };
    
  export default Quotes;

