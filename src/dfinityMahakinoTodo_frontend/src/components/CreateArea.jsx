import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Fab, Zoom} from "@mui/material";

export const CreateArea = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevState => {
           return {
             ...prevState,
             [name]: value
           };
        });
    }
    
    function submitNote(event) {
        props.onAdd(note);
        setNote({
           title: "",
           content: ""
        });
        event.preventDefault();
    }

    function expandTrue() {
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && <input
                    autoFocus
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />}
                <div className="horizontal-rule"></div>
                <textarea
                    name="content"
                    onClick={expandTrue}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note ..."
                    rows={isExpanded? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddCircleIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
};