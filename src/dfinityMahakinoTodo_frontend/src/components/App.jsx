import React from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {CreateArea} from "./CreateArea";
import {Note} from "./Note";

export const App = () => {
    return (
        <div>
            <Header />
            <CreateArea />
            <Note />
            <Footer />
        </div>
    );
};