import React, { useState } from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {CreateArea} from "./CreateArea";
import {Note} from "./Note";
import {dfinityMahakinoTodo_backend} from "../../../declarations/dfinityMahakinoTodo_backend";

export const App = () => {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevState => {
           dfinityMahakinoTodo_backend.createNote(newNote.title, newNote.content);
           return [newNote, ...prevState];
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            <Note />
            <Footer />
        </div>
    );
};