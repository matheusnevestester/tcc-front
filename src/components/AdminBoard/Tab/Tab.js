import React, {useState} from "react";
import "./Tab.css"
import "../Book/BookListAdmin"
import "../Book/NewBookForm"
import "../Book/CategoryListAdmin"
import "../Book/NewCategoryForm"
import BookListAdmin from "../Book/BookListAdmin";
import NewBookForm from "../Book/NewBookForm";
import NewCategoryForm from "../Book/NewCategoryForm";
import CategoryListAdmin from "../Book/CategoryListAdmin";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("books");

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("books");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("categories");
    };



    return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
          <li className={activeTab === "books" ? "active" : ""}
              onClick={handleTab1}
          >Livros</li>

          <li className={activeTab === "categories" ? "active" : ""}
              onClick={handleTab2}
          >Categorias</li>
      </ul>
      <div className="outlet">
          {activeTab === "books" ? <><NewBookForm /> <BookListAdmin /></>:<><NewCategoryForm /> <CategoryListAdmin /></> }
      </div>
    </div>
  );
};

export default Tabs;