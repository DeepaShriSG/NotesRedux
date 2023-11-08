import React, { useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggle } from "../redux/NotesSlice";


function Notes({title,comment,id}) {

  let notes = useSelector((state)=>state.notes)
  let dispatch = useDispatch()
  
  let navigate = useNavigate();




  let handleDelete = () => {
    
    dispatch(toggle(id))
    
  
  };


  return <>
         <div className="card col-lg-6 col-12  ">
        <div className="card-body">
          <div className="d-flex justify-content-between">
          <h5 className="card-title ">{title}</h5>
          <span className="mx-4">
              <img
                src="/Images/edit.svg"
                alt=""
                className="edit"
                onClick={() => {
                  navigate(`/edit/${id}`);
                }}
              />
              &nbsp; &nbsp;
              <img
                src="/Images/delete.svg"
                alt=""
                className="delete"
                onClick={() => handleDelete(id)}
              />
            </span>
          </div>
          
          <p className="card-text">
            {comment}
          </p>
          <small></small>
          
        </div>
      </div>
  </>
}

export default Notes