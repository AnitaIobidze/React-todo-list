import { useState } from "react"

function App() {
  const [value, setValue]=useState("")
  const [items, setItems]=useState([])
  const handleSaveItem=()=>{
    console.log("User wants to save something", value)
    if(value===""){
      alert("value must not be empty")
    }else{
      setItems([...items,value])
      setValue("")
    }
  }
  const handleInputChange=(event)=>{
    setValue(event.target.value)
  }
  const handleDelete=(indexToDelete)=>{
    const filteredItems=items.filter(
      (item, index)=>index!==indexToDelete)
    setItems(filteredItems)
  }
  return<>
    <input type="text" 
    placeholder="Enter text" 
    value={value} 
    onChange={handleInputChange}/>
    <button onClick={handleSaveItem}>Save</button>
    <ul>
      {items.map((item, index)=>{
        return(
          <li className={index%2===0? "green-text": "red-text"}>{item}<button onClick={()=>handleDelete(index)}>Delete</button></li>
        )
      })}
    </ul>
  </>
}

export default App
