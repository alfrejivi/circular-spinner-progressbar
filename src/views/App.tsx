import React, { useEffect, useState } from "react";

import ProgressWidget from "../components/ProgressWidget/ProgressWidget";
import Spinner from "../components/Spinner/Spinner";

import "./App.css";

const App: React.FC = () => {

    const [loading, setLoading] = useState(true);
    // Loading time simulation
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <section className="App">
            <section className="App-widget">
                {loading ?
                    <div className="App-loading fadeIn">
                        {/* Spinner implementation with no params */}
                        <Spinner />
                        <span>Loading</span>
                    </div> :
                    <ProgressWidget />}
            </section>
        </section>
    );
};

export default App;
