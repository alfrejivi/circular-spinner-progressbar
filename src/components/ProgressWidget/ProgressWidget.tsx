import React, { useEffect, useState } from "react";

import Spinner from "../Spinner/Spinner";

import "./ProgressWidget.css";

const ProgressWidget: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [spin, setSpin] = useState(true);
    const [isPaused, setIsPaused] = useState(true);

    const toggleState = () => {
        setIsPaused(!isPaused);
    };

    const reset = () => {
        setProgress(0);
        setIsPaused(true);
    };

    const toggleSpin = () => {
        setSpin(!spin);
    };

    // Progress time simulation
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (!isPaused) {
            timer = setInterval(() => {
                if (progress < 100) {
                    setProgress((value) => value + 1);
                }
            }, 100);
        } else if (progress === 100 || isPaused) {
            clearInterval(timer!);
        }

        return () => clearInterval(timer!);
    }, [isPaused, progress]);

    return (
        <section className="ProgressWidget fadeIn">
            <article className="ProgressWidget-spinner">
                {/* Spinner implementation with some params */}
                <Spinner
                    spin={spin}
                    showPercentage
                    fill={progress} />
            </article>
            <article className="ProgressWidget-actions">
                {
                    (progress < 100) &&
                    <>
                        <button data-test="start" onClick={toggleState} >{isPaused ? "START" : "PAUSE"}</button>
                        <button data-test="disable" onClick={toggleSpin} >{spin ? "DISABLE SPIN" : "ENABLE SPIN"}</button>
                    </>
                }
                <button data-test="reset" onClick={reset} disabled={progress === 0}>RESET</button>

            </article>
        </section>
    );
};

export default ProgressWidget;
