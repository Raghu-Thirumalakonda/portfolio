import { useEffect, useState } from "react";
import "./ScrollTop.css";

function ScrollTop(){

const [show,setShow]=useState(false);

useEffect(()=>{

window.addEventListener("scroll",()=>{

setShow(window.scrollY>300);

});

},[]);

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

show&&(

<button

className="scroll-top"

onClick={top}

>

↑

</button>

)

);

}

export default ScrollTop;