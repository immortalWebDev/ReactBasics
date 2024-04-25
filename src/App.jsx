import React, { useState, useCallback } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [isDescending, setIsDescending] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const toggleSortingOrderHandler = useCallback(() => {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  }, []);

  const listItems = [5, 3, 1, 10, 9]; // Static list items (not memoized)

  return (
    <div className="app">
      <DemoList
        title={listTitle}
        items={listItems}
        isDescending={isDescending}
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleSortingOrderHandler}>
        Change to {isDescending ? "Ascending" : "Descending"} Order
      </Button>
    </div>
  );
}

export default App;
