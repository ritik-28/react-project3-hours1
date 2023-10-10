import React from "react";

const Table3 = (props) => {
  return (
    <div className="users-control">
      <h1>Table3</h1>
      <ul>
        {props.item.length === 0
          ? ""
          : props.item.map((item) => (
              <li className="list-control" key={props.item.id}>
                {item.id - item.price - item.dish}
                <button>Delete</button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Table3;
