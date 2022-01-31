import React, {useState} from "react";
import "./Tab.css"
import "../Book/BookListAdmin"
import "../Book/NewBookForm"
import "../Book/CategoryListAdmin"
import "../Book/NewCategoryForm"

import NewGroupForm from "../Users/NewGroupForm";
import NewStudentForm from "../Users/NewStudentForm";
import UserListAdmin from "../Users/UserListAdmin";
import GroupListAdmin from "../Users/GroupListAdmin";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("students");

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("students");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("groups");
    };


    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <li className={activeTab === "students" ? "active" : ""}
                    onClick={handleTab1}
                >Estudantes</li>
                <li className={activeTab === "groups" ? "active" : ""}
                    onClick={handleTab2}
                >Grupos do livro</li>
            </ul>
            <div className="outlet">
                {activeTab === "students" ? <><NewStudentForm/><UserListAdmin/></>: <><NewGroupForm/><GroupListAdmin/></> }
            </div>
        </div>
    );
};

export default Tabs;