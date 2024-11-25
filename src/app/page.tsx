"use client"
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


export default function Home() {
  // define state
  const [todos,setTodos]=useState([
    {movie: "Django unchanged",id:1},
    {movie:"catch me if you can",id:2}

  ])
  const [inputval,setinputval]=useState("")
  const [id,setid]=useState(0)
 // console.log(inputval , id) for checking

  //function Add item
  const Additme=()=> {
    let obj:any =todos.find(item => item.id==id)
  
    if(obj){
    let newarray=todos.filter(item=> item.id !==id)
    setTodos([...newarray,{movie: inputval, id}])
    setinputval("")
    setid(0)
    return
  }

    setTodos([...todos,{movie: inputval, id}])
    setinputval("")
    setid(0)
  }
  // Edit function
  const Edititem=(id:any)=>{
    let obj:any =todos.find(item => item.id ==id)
    setinputval(obj.movie)
    setid(obj.id)
  }
  // Delete function
  const Delitem=(id:any)=>{
    let newarray=todos.filter(item=> item.id !==id)
    setTodos([...newarray])
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-[35px] underline"> Movies Todo App  </h1>
      {/* start input div */}
       <div className="flex justify-between gap-4 mt-4">
        <input type="text" value={inputval}
        
        onChange={(e) => setinputval(e.target.value)}
        className="p-2 ml-2 w-[60%] border-b text-lg focus:outline-none " 
        placeholder="Enter movi name "
        ></input>
        
        <input 
        type="number" value={id}
        onChange={(e:any) => setid(e.target.value)}
        className="p-2 ml-2 w-[20%] border-b text-lg focus:outline-none " 
        placeholder="Move Id">
        </input>
        <button onClick={(Additme)} className="bg-blue-400 w-[20%] text-white rounded hover:bg-blue-200"> Add movies</button>
        </div> 
        {/* end input div   */}
        <h1 className="text-center text-[35px] underline mt-3 text-rose-900"> Movies List  </h1>

        <div className="grid grid-cols-2 gap-5 mt-5">
        
        {/* Grid items */}
        {/* <FaPlus />  checking ract icon */}

      {
        todos.map((item:any,i:any)=>{
          return(
            <div className="shadow p-4" key={i}>
            <div className="flex justify-between">
              <span className="shadow rounded-full h-8 w-8 text-center my-auto ">{i+1}</span>
              <span onClick={()=>Delitem(item.id)} className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer">x</span>
            
            </div>
             {/* data div  */}
             
            <div className="mt-3 text-[30px] text-gray-600"> {item.movie}</div> 
            <div> 
              <h2 onClick={()=>Edititem(item.id)} className="text-right cursor-pointer">Edit</h2>
              {/* <h1 className="text-green-500">id: {item.id}</h1>  */}
            </div>
          
           </div>
          )
        })
      }
                 
       </div>
      </div>
      
  );
}
