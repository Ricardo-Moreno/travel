import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddDestinationForm from "./components/AddDestinationForm/AddDestinationForm";

import ContainerPage from "./components/ContainerPage/ContainerPage";
import UpdateObjectForm from "./components/UpdateObjectForm/UpdateObjectForm";
import Categories from "./components/Categories/Categories";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import Search from "./components/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Search />
        <SearchContainer />
        <Routes>
          <Route path="/travelPrueba/" element={<ContainerPage />} />
          <Route path="/travelPrueba/form" element={<AddDestinationForm />} />
          <Route
            path="/travelPrueba/formUpdate"
            element={<UpdateObjectForm />}
          />
          <Route
            path="/travelPrueba/category/:category"
            element={<Categories />}
          />
          {/* <Route path="/destination/:id" element={<DestinationDetailsPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
