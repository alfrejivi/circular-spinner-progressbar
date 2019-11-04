import { mount, ReactWrapper } from "enzyme";
import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";

import ProgressWidget from "./ProgressWidget";

const wait = (duration: number) => {
    return new Promise((resolve) => setTimeout(() => resolve(), duration));
};

describe("<ProgressWidget />", () => {
    let progressWidget: ReactWrapper;
    beforeEach(() => {
        progressWidget = mount(<ProgressWidget />);
    });

    it("Renders without crashing", () => {
        expect(progressWidget.length).toEqual(1);
    });

    it("Renders UI", () => {
        expect(progressWidget.find("button").length).toEqual(3);
        expect(progressWidget.find("Spinner").length).toEqual(1);
        expect(progressWidget.find("Spinner").prop("fill")).toEqual(0);
        expect(progressWidget.find("Spinner").prop("showPercentage")).toBeTruthy();
        expect(progressWidget.find("Spinner").prop("spin")).toBeTruthy();
    });

    it("Start/Pause progress", async () => {
        await act(async () => {
            const button = progressWidget.find("button[data-test='start']");
            expect(button.length).toEqual(1);
            expect(button.text()).toEqual("START");
            button.simulate("click");
            await wait(500);
            progressWidget.update();
            expect(button.text()).toEqual("PAUSE");
            const newFillValue = progressWidget.find("Spinner").prop("fill");
            expect(newFillValue).toBeGreaterThan(0);
            button.simulate("click");
            await wait(500);
            expect(progressWidget.find("Spinner").prop("fill")).toEqual(newFillValue);
            expect(button.text()).toEqual("START");
        });
    });

    it("Disable/Enable spin", () => {
        const button = progressWidget.find("button[data-test='disable']");
        expect(button.length).toEqual(1);
        expect(button.text()).toEqual("DISABLE SPIN");
        expect(progressWidget.find("Spinner").find("animateTransform").length).toEqual(1);
        expect(progressWidget.find("Spinner").prop("spin")).toBeTruthy();
        button.simulate("click");
        expect(progressWidget.find("Spinner").prop("spin")).toBeFalsy();
        expect(progressWidget.find("Spinner").find("animateTransform").length).toEqual(0);
        expect(button.text()).toEqual("ENABLE SPIN");
        button.simulate("click");
        expect(progressWidget.find("Spinner").prop("spin")).toBeTruthy();
        expect(button.text()).toEqual("DISABLE SPIN");
        expect(progressWidget.find("Spinner").find("animateTransform").length).toEqual(1);
    });

    it("Reset spinner", async () => {
        await act(async () => {
            const startButton = progressWidget.find("button[data-test='start']");
            const resetButton = progressWidget.find("button[data-test='reset']");
            expect(resetButton.length).toEqual(1);
            expect(resetButton.prop("disabled")).toBeTruthy();
            expect(progressWidget.find("Spinner").prop("fill")).toEqual(0);
            startButton.simulate("click");
            await wait(500);
            progressWidget.update();
            expect(progressWidget.find("Spinner").prop("fill")).toBeGreaterThan(0);
            resetButton.simulate("click");
            expect(progressWidget.find("Spinner").prop("fill")).toEqual(0);
        });
    });

});
