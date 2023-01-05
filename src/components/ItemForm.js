import React ,{useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  // console.log(onAddedItem)
  const [itemName, setItemName]= useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  
  
  
  function handleNewCategory(event){ setItemCategory(event.target.value) }
  function handleNewInput(event){ setItemName(event.target.value) }
  function handleSubmit(e){
    e.preventDefault()
    onItemFormSubmit({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
    }) ;
  }
  // console.log(newItems)

  //  console.log(displayNewList)
  return (
    
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name"  value={itemName} onChange={handleNewInput}  /> 
        {/* value={newItem.name} onChange={props.onItemFormSubmit} */}
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleNewCategory}>
           
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
    
    
  );
}

export default ItemForm;
// newItems.map((newItem) => ( <Item key={newItem.id} name={newItem.name} category={newItem.category} />))
//     