import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <ItemListContainer />
          <ItemDetailContainer titulo="Detalle de la prenda" /> */}

          <Route path="/" element={<ItemListContainer titulo="Mi app"/>} />

          <Route path="/talles/:talleid" element={<ItemListContainer titulo="Talles"/>} />

          <Route path="/producto/:id" element={<ItemDetailContainer titulo="Detalle de la prenda"/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
