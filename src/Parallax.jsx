import React,{useState,useEffect} from 'react';
import M from "materialize-css";
import logo from './Ally.JPG'
const Parallax = ()=>{
  useEffect (()=>{
      let elements = document.querySelectorAll(".parallax");
      M.Parallax.init(elements);


  },[]);
  return(
    <div className = 'container'>
    <div className = 'parallax-container'>
      <div className = 'parallax'>
        <img src = "http://picsum.photos/600/1000?random=1"  alt = "parallax_1" class = 'center'/>

      </div>
      <div className = "section white">

        <h2>my amazing parallax</h2>
        <p>demo for materialize css parallax</p>
      </div>
</div>
<div className = 'parallax-container'>
  <div className = 'parallax'>
    <img src = 'logo' alt = "parallax_2" />

  </div>
  <div className = "section white">

    <h2>my amazing parallax2</h2>
    <p>demo for materialize css parallax</p>
  </div>
</div>

</div>


  );


};export default Parallax;
