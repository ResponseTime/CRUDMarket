import { useEffect, useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Itemsi from "./components/Itemsi";
import Navbar from "./components/Navbar";
import Update from "./components/Update_prod";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New_prod from "./components/New_prod";
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
          <Route path="/new" element={<New_prod />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
