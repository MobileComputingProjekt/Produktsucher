import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const add = (e) => {
    e.preventDefault();
    if (!item) {
      return;
    }
    setItems((items) => [
      ...items,
      {
        id: uuidv4(),
        item
      }
    ]);
  };
  const remove = (index) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };
  return (
    <div className="App">
      <form onSubmit={add}>
        <fieldset>
          <label>item</label>
          <input value={item} onChange={(e) => setItem(e.target.value)} />
        </fieldset>
        <button type="submit">add item</button>
      </form>
      {items.map((item, index) => {
        return (
          <div key={item.id}>
            <p>{item.item}</p>
            <button onClick={() => remove(index)}>remove</button>
          </div>
        );
      })}
    </div>
  );
}