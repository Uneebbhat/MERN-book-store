import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export const ShowBooks = () => {
  const [booksData, setBooksData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooksData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilterChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <h1>Books List</h1>
          <Link to={"/books/create"}>
            <button className="btn btn-success">
              Create New Book <AddIcon />
            </button>
          </Link>
        </div>

        <div class="mb-3">
          <label for="search" class="form-label">
            Search Book
          </label>
          <input
            type="search"
            class="form-control bg-dark text-light"
            id="search"
            placeholder="Search Book"
            onChange={handleFilterChange}
          />
        </div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Title</th>
              <th scope="col">Book Author</th>
              <th scope="col">Publish Year</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {booksData
              .filter((book) => {
                return (
                  search.toLowerCase() === "" ||
                  book.title.toLowerCase().includes(search.toLowerCase()) ||
                  book.author.toLowerCase().includes(search.toLowerCase()) ||
                  book.publishYear
                    .toString()
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
              })
              .map((book, id) => (
                <tr key={id}>
                  <th scope="row">{id + 1}</th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishYear}</td>
                  <td>
                    <Link to={`/books/read/${book._id}`}>
                      <button type="button" className="btn btn-warning">
                        Info
                      </button>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <button type="button" className="btn btn-primary mx-3">
                        Edit
                      </button>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
