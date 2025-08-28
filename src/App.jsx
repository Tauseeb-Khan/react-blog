import { useState }  from "react";
import UserComponent from "./UserComponent";
function App() {
  const  [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
  const handleFruit=()=>{
    setFruits("Banana")
  }
  return(
    <div>
      <h1>Fruits List</h1>
      <h1>{fruits}</h1>
 
 <button onClick={handleFruit}>Change Fruit</button>
 <UserComponent/>
    </div>
  )

}
export default App