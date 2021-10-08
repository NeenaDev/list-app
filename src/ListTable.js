import React from "react";
import './ListTable.scss';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./store/actions";

export default function ListTable() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.list);

  const removeItemFromList = (index,id) => {
    dispatch(actionCreators.removeItem(index));
    dispatch(actionCreators.deSelectItem(id));
  };

  const selectItemFromList = (e,data) => {
    if(e.target.checked){
        dispatch(actionCreators.addToList(data));
    } else {
        dispatch(actionCreators.deSelectItem(data.id));
    }
  };

  return (
      <div>
        <h3>List Table</h3>
        {items.length > 0 ? <table className="list-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Delivery Method</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    return <tr key={index} >
                        <td><input type="checkbox" name={item.name} onChange={(e)=>{ selectItemFromList(e,item)}}/>&nbsp;</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.deliveryMethod}</td>
                        <td><button onClick={() => removeItemFromList(index, item.id)}>Remove</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        : <p>List is empty</p>    
    }
        
    </div>
  );
}