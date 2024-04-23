import React, { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    const quantityVal = Number(quantity);
    cartCtx.addItem({ ...props.item, quantity: quantityVal });

    setQuantity(1);
  };
  
  return (
    <>
      <form className={classes.form}>
        {/* <input type='text' placeholder='Amount'></input> */}

        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "10",
            step: "1",
            value: quantity,
            onChange: (event) => {
              setQuantity(event.target.value);
            },
          }}
        />
        <button onClick={addItemToCart}>Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
