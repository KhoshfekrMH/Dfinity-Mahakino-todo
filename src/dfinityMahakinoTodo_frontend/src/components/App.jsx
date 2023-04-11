import React from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {CreateArea} from "./CreateArea";

export const App = () => {
    return (
        <div>
            <Header />
            <CreateArea />
            <Footer />
        </div>
    );
};