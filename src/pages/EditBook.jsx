import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)

      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
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
              value={title}
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
              value={author}
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
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleEditBook}>
            Edit Book
          </button>
        </div>
      </div>
    </>
  );
};
