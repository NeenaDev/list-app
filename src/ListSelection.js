import React from "react";
import './ListSelection.scss';
import { useSelector } from "react-redux";

export default function ListSelection() {
  const selectedItem = useSelector((state) => state.selectedItem);
  console.log('====>', selectedItem);
  return (
      <div className="list-selection">
          <h3> List Selection </h3>
          {selectedItem.length > 0 ? 
            selectedItem.map((item) => {
              return <ul key={item.id} className="list-selection__item-details">
              <li>Item: {item.name}</li>
              <li>Category: {item.category}</li>
              <li>Delivery: {item.deliveryMethod}</li>
            </ul>
            })
            
          : <p>No Selection</p>
          }
      </div>
  );
}