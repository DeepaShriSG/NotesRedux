import Notes from "./Notes";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {add,toggle} from '../redux/NotesSlice'
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Dashboard() {


  
let notes = useSelector((state)=>state.notes)
    console.log(notes)



let dispatch = useDispatch()



  let navigate = useNavigate();

  

  console.log("useEffect Triggered");

  const UserSchema = Yup.object().shape({
    title: Yup.string().required("* Required").min(3, "* Title should be atlest 3 characters"),
    comment: Yup.string().required("* Required").min(3, "* Comment should be atlest 3 characters"),
  });

  
  return (
    <>
      <div className="rightside">
        <div className="rightcontent">
          <div className="mobilemenu d-block d-sm-none my-2">
            <span className="row justify-content-between align-items-center">
              <a className="logo navbar-brand col-6 m-0" href="#">
                Notes
              </a>
              <div className="menuicon  col-6 text-end">
                <i
                  className="fa-solid fa-bars fa-xl me-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#staticBackdrop"
                  aria-controls="staticBackdrop"
                ></i>
              </div>
            </span>
          </div>

          <div className="row justify-content-between align-items-center mx-3">
            <div className="Sales-Information col-11 mt-4 mb-3  mx-lg-4">
              <h4 className="add-note mb-3">Add a Note</h4>

              <div className="mb-3">
                <Formik
                  initialValues={{
                    title: "",
                    comment: "",
                  }}
                  validationSchema={UserSchema}
                  onSubmit={(values)=>{
                   
                        let payload = {
                          title:values.title,
                          comment:values.comment
                        }
                        
                        dispatch(add(payload))
                      
                  }}
                >
                  {({
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Form.Group
                        className="mb-3 title-input"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Title"
                          name="title"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.title && touched.title ? (
                          <div style={{ color: "red" }}>{errors.title}</div>
                        ) : null}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label> Take a Note</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="comment"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.comment && touched.comment ? (
                          <div style={{ color: "red" }}>{errors.comment}</div>
                        ) : null}
                      </Form.Group>

                      <Button type="submit" className="button-submit">
                        Add
                      </Button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          <div className="notes-card mt-5 mx-lg-2">
            <div className="d-flex justify-space-between mx-3">
              <img src="/Images/description.svg" alt="" />
              <span className="title">My Notes</span>
            </div>

            <h5 className="recent-title mx-4">Recently Viewed</h5>

            <div className="row mx-3">
              {
              notes.map((e, i) => {
                return (
                  <Notes key={i} id={i} title={e.title} comment={e.comment} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
