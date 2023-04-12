import React, {useEffect, useState} from "react";
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

    useEffect(() => {
        console.log ("useEffect is triggerd!");
        fetchData ();
    }, []);

    async function fetchData() {
        const notesArray = await dfinityMahakinoTodo_backend.readNote ();
        setNotes ( notesArray );
    }
    
    function deleteNote(id) {
        dfinityMahakinoTodo_backend.removeNote(id);
        setNotes(prevState => {
            return prevState.filter((noteItem, index) => {
               return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
};