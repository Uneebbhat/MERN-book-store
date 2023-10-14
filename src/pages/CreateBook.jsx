import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
    };
    axios
      .post("http://localhost:5000/books", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container my-5">
        <h2>Create Book</h2>
        <div>
          <div class="my-3">
            <label for="title" class="form-label">
              Book Title
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Book Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="author" class="form-label">
              Book Author
            </label>
            <input
              type="text"
              class="form-control"
              id="author"
              placeholder="Book Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="publishYear" class="form-label">
              Publish Year
            </label>
            <input
              type="number"
              class="form-control"
              id="publishYear"
              placeholder="Publish Year"
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleSaveBook}>
            Create Book
          </button>
        </div>
      </div>
    </>
  );
};
