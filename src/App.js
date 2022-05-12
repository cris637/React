import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <ItemListContainer />
          <ItemDetailContainer titulo="Detalle de la prenda" /> */}

            <Route
              path="/"
              element={<ItemListContainer titulo="Productos" />}
            />

            <Route
              path="/talles/:talleid"
              element={<ItemListContainer titulo="Talles" />}
            />

            <Route
              path="/producto/:id"
              element={<ItemDetailContainer titulo="Detalle de la prenda" />}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
