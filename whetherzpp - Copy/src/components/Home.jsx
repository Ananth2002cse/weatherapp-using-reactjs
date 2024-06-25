import React, { useEffect, useState } from 'react';
import search from '../assests/search.jpg';
import cloudimg from '../assests/cloudy.png'
import Rain from '../assests/rainy.png'
import clear from '../assests/4142c59c1696eaec196b806a994b4006.jpg'
import Drizzle from '../assests/Drizzle.png'
import mist from '../assests/mist.jpg'
import './Home.css'
import axios from 'axios';

const Home = () => {
    const[data,setdata]=useState({
        celcius:10,
        name:'london',
        image:`${cloudimg}`

    })
    const[name,setname]=useState('')
 
    const handleClick=()=>{
        if(name!==''){
           
                const apiurl='https://api.openweathermap.org/data/2.5/weather?q=india&appid=d25086c657e89a87360ddd2893932772';
               axios.get(apiurl)
               .then(res=>{
                let imagepath='';
               if(res.data.weather[0].main==='Clouds'){
                imagepath=`${cloudimg}`
               }
               else if(res.data.weather[0].main==='Rain'){
                imagepath=`${Rain}`
               }
               else if(res.data.weather[0].main==='Clear'){
                imagepath=`${clear}`
               }
               else if(res.data.weather[0].main==='Deizzle'){
                imagepath=`${Drizzle}`
               }
               else if(res.data.weather[0].main==='Clear'){
                imagepath=`${mist}`
               }
               else{
                imagepath=`${cloudimg}`
               }
                setdata({...data, celcius: res.data.main.temp,name: res.data.name,image:imagepath})
               })
               .catch(err=>console.log(err))
            
        }
    }
  return (
    <div className='container'>
        <div className="weather">
            <div className="search">
                <input type='text' placeholder='enter your city name' onChange={(e)=>setname(e.target.value)}/>
                <button onClick={handleClick}>search</button>
            </div>
            <div className="winfo">
                <img src={data.image} alt="" className='icon' />
                <h1>{data.celcius}°c</h1>
                <h2>{data.name}</h2>
            </div>
        </div>
    </div>
  )
}

export default Home