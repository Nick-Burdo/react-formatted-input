import React from "react";
import FormattedInput from "../source/index.jsx";
import { convertToObject } from "react-json-renderer";

test("accepts a value upon initialisation", function() {
    const input = convertToObject(
        <FormattedInput
            value="test value"
            />
    );
    const inputEl = input.props.children;
    expect(inputEl.props.value).toEqual("test value");
});
