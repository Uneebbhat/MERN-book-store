import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "@mui/icons-material";
import { CreateBook } from "./pages/CreateBook";
import { ReadBook } from "./pages/ReadBook";
import { EditBook } from "./pages/EditBook";
import { DeleteBook } from "./pages/DeleteBook";
import { ShowBooks } from "./pages/ShowBooks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ShowBooks />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/read/:id" element={<ReadBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
