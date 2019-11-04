import React from "react";

import "./Spinner.css";

export interface SpinnerProps {
    fill?: number;
    showPercentage?: boolean;
    radio?: number;
    color?: string;
    backgroundColor?: string;
    stroke?: number;
    spin?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
    fill = 10,
    showPercentage = false,
    radio = 45,
    color = "#409fff",
    stroke = 5,
    backgroundColor = "#e8ebed",
    spin = true,
}) => {
    const circunference = (2 * Math.PI) * radio;

    return (
        <div data-test="spinner" className="Spinner">
            <svg
                className="Spinner-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMinYMin meet"
                shapeRendering="geometricPrecision">
                <circle
                    strokeMiterlimit={stroke}
                    cx="50"
                    cy="50"
                    r={radio}
                    stroke={backgroundColor}
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={`${circunference}, ${circunference}`} />
                <circle
                    className="Spinner-circle"
                    strokeMiterlimit={stroke}
                    cx="50"
                    cy="50"
                    r={radio}
                    stroke={color}
                    fill="transparent"
                    strokeLinecap="round"
                    strokeWidth={stroke}
                    strokeDasharray={`${circunference * fill / 100}, ${circunference}`}>
                    {spin && <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur={"1.5s"}
                        repeatCount={fill === 100 ? "none" : "indefinite"}
                        from="0 50 50"
                        to="360 50 50" />}
                    />
                </circle>
                {showPercentage && <text
                    className="Spinner-text"
                    x="50"
                    y="50"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill={color}
                    textRendering="geometricPrecision">{fill}%</text>}

            </svg>
        </div>
    );
};

export default Spinner;
