import React from 'react';
import '../../App.css';
import Footer from "../Footer";

import ConferencesListAdmin from "../AdminBoard/Conferences/ConferencesListAdmin";
import NewConferenceForm from "../AdminBoard/Conferences/NewConferenceForm";

export default function AdminConferences() {
    return (
        <>
            <NewConferenceForm/>
            <ConferencesListAdmin/>
            <Footer/>
        </>
    );
}
