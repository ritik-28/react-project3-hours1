import React, { useRef, useState } from "react";
import "./Form.css";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const Form = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const dishRef = useRef();
  const selectRef = useRef();
  const [listItem1, setListItem1] = useState([]);
  const [listItem2, setListItem2] = useState([]);
  const [listItem3, setListItem3] = useState([]);

  const sbtFn = (e) => {
    e.preventDefault();

    if (selectRef.current.value === "Table1") {
      setListItem1((prevState) => {
        return [
          ...prevState,
          {
            id: idRef.current.value,
            price: priceRef.current.value,
            dish: dishRef.current.value,
            select: selectRef.current.value,
          },
        ];
      });
    } else if (selectRef.current.value === "Table2") {
      setListItem2((prevState) => {
        return [
          ...prevState,
          {
            id: idRef.current.value,
            price: priceRef.current.value,
            dish: dishRef.current.value,
            select: selectRef.current.value,
          },
        ];
      });
    } else {
      setListItem3((prevState) => {
        return [
          ...prevState,
          {
            id: idRef.current.value,
            price: priceRef.current.value,
            dish: dishRef.current.value,
            select: selectRef.current.value,
          },
        ];
      });
    }
  };
  return (
    <>
      <form className="form-control" onSubmit={sbtFn}>
        <label htmlFor="orderId">Unique Order Id</label>
        <input type="number" ref={idRef} name="orderId" />
        <label htmlFor="price">Choose Price</label>
        <input type="number" ref={priceRef} name="price" />
        <label htmlFor="dish">Choose Dish</label>
        <input type="text" ref={dishRef} name="dish" />
        <select ref={selectRef}>
          <option>Table1</option>
          <option>Table2</option>
          <option>Table3</option>
        </select>
        <input type="submit" className="btn" value="Add to Bill" />
      </form>
      <Table1 item={listItem1} />
      <Table2 item={listItem2} />
      <Table3 item={listItem3} />
    </>
  );
};

export default Form;
