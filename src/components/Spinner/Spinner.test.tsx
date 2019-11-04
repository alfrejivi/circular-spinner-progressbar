import { shallow } from "enzyme";
import React from "react";

import Spinner, { SpinnerProps } from "./Spinner";

describe("<Spinner /> with default props", () => {
    const defaultProps: SpinnerProps = {
        fill: 10,
        radio: 45,
    };

    const circunference = (2 * Math.PI) * defaultProps.radio!;
    const spinner = shallow(<Spinner />);

    it("Renders without crashing", () => {
        expect(spinner.length).toEqual(1);
    });

    it("Renders the default UI", () => {
        expect(spinner.find("svg").length).toEqual(1);
        expect(spinner.find("circle").length).toEqual(2);
        expect(spinner.find("animateTransform").length).toEqual(1);
        expect(spinner.find("text").length).toEqual(0);
    });

    it(`Circle has the correct radio`, () => {
        expect(spinner.find(".Spinner-circle").prop("r")).toEqual(defaultProps.radio);
    });

    it(`Circle has ${defaultProps.fill}% filled`, () => {
        expect(spinner.find(".Spinner-circle").prop("strokeDasharray")).toEqual(`${circunference * defaultProps.fill! / 100}, ${circunference}`);
    });
});

describe("<Spinner /> with custom props", () => {
    const customProps: SpinnerProps = {
        color: "red",
        fill: 80,
        radio: 45,
    };

    const circunference = (2 * Math.PI) * customProps.radio!;
    const spinner = shallow(<Spinner color={customProps.color} fill={customProps.fill} showPercentage spin={false} />);

    it("Renders without crashing", () => {
        expect(spinner.length).toEqual(1);
    });

    it("Renders the default UI", () => {
        expect(spinner.find("svg").length).toEqual(1);
        expect(spinner.find("circle").length).toEqual(2);
        expect(spinner.find("animateTransform").length).toEqual(0);
        expect(spinner.find("text").length).toEqual(1);
    });

    it(`Circle has the correct radio`, () => {
        expect(spinner.find(".Spinner-circle").prop("r")).toEqual(customProps.radio);
    });

    it(`Circle has ${customProps.fill}% filled and color red`, () => {
        expect(spinner.find(".Spinner-circle").prop("strokeDasharray")).toEqual(`${circunference * customProps.fill! / 100}, ${circunference}`);
        expect(spinner.find(".Spinner-circle").prop("stroke")).toEqual("red");
    });

    it(`Text label is ${customProps.fill}% and color red`, () => {
        expect(spinner.find(".Spinner-text").text()).toEqual(`${customProps.fill}%`);
        expect(spinner.find(".Spinner-text").prop("fill")).toEqual("red");
    });
});
