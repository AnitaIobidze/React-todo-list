import { useState } from "react"

function App() {
  const [value, setValue] = useState("")
  const [items, setItems] = useState([])
  const [list, linedList] = useState([])
  const handleSaveItem = () => {
    console.log("User wants to save something", value)
    if (value === "") {
      alert("value must not be empty")
    } else {
      setItems([...items, value])
      setValue("")
    }
  }
  const handleInputChange = (event) => {
    setValue(event.target.value)
  }
  const handleDelete = (indexToDelete) => {
    setItems(items.filter((item, index) => index !== indexToDelete))
    const newChecked = list.filter((i) => i !== indexToDelete).map((i) => (i > indexToDelete ? i - 1 : i))
    linedList(newChecked)
  }
  const handleCheckbox = (indexToChack) => {
    if (list.includes(indexToChack)) {
      linedList(list.filter((i) => i !== indexToChack));
    } else {
      linedList([...list, indexToChack]);
    }
  }
  return <>
    <div className="container">
      <h1>✨ To-Do List ✨</h1>
      <div className="row">
        <input type="text"
          placeholder="Enter text"
          className="input-text"
          value={value}
          onChange={handleInputChange} />
        <button onClick={handleSaveItem} className="add">Save</button>
      </div>
      {items.map((item, index) => {
        return (
          <div className="list-item">
            <div className="list-left">
              <input type="checkbox" checked={list.includes(index)} onClick={() => handleCheckbox(index)} />
              <span className={list.includes(index) ? "checked" : ""}>{item}</span>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(index)}>❌</button>
          </div>
        )
      })}
    </div>
  </>
}

export default App
