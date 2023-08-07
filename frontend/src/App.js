import { useEffect, useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Itemsi from "./components/Itemsi";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    const fetchItems = async () => {
      setloading(true);
      const res = await axios.get(
        "https://items-api-v1-n89d.onrender.com/products"
      );
      setItems(res.data);
      setloading(false);
    };
    fetchItems();
  }, []);

  const indexOfLastItem = pageNumber * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (num) => {
    setPageNumber(num);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Itemsi
                items={currentItem}
                loading={loading}
                itemsPerPage={itemsPerPage}
                itemslen={items.length}
                paginate={paginate}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
