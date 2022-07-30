//https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-MarcosGaius

import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { apiHamburgueria } from "./services/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartProductList, setCartProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [filterSearch, setfilterSearch] = useState("");

  useEffect(() => {
    apiHamburgueria.get("/products").then((response) => {
      setProductList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer autoClose={1500} pauseOnFocusLoss={false} limit={5} />
      <MainPage
        productList={productList}
        cartProductList={cartProductList}
        filterSearch={filterSearch}
        setfilterSearch={setfilterSearch}
        filteredProductList={filteredProductList}
        setFilteredProductList={setFilteredProductList}
        setCartProductList={setCartProductList}
      />
    </div>
  );
}

export default App;
