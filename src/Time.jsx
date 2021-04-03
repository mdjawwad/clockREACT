import React, { useState } from 'react'



const Time = ()=>{


    let time2 =new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time2);
    
    const updateTime = ()=>{ 
    let time2 =new Date().toLocaleTimeString();
    setCtime(time2);
    }
    setInterval(updateTime,1000)
   
return(
    <>
    
        <p>
           
           {ctime}
           
        </p>
      
        
        
    </>
)


    
}

export default Time;