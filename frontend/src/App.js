import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Itemsi from "./components/Itemsi";
import Pagination from "./components/Pagination";
function App() {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    const fetchItems = async () => {
      setloading(true);
      const res = await axios.get("http://localhost:5000/products");
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
      <Navbar />
      <Itemsi items={currentItem} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
