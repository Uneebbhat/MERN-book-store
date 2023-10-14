import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ReadBook = () => {
  const [bookData, setBookData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container my-5">
      <h2>Read Book</h2>
      <div className="my-3">
        <h4>
          <strong>Book Id:</strong> {id}
        </h4>
        <h4>
          <strong>Title:</strong> {bookData.title}
        </h4>
        <h4>
          <strong>Author:</strong> {bookData.author}
        </h4>
        <h4>
          <strong>Publish Year:</strong> {bookData.publishYear}
        </h4>
      </div>
    </div>
  );
};
