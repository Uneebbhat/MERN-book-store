import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancelDelete = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container my-5">
        <h2>Delete Book</h2>
        <div className="delete-box my-3">
          <h3>Are you sure you want to delete this book?</h3>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button
            className="btn btn-primary cancel"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
