import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    breakTheTest();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    breakTheTest();
});

function breakTheTest() {
    throw new Error("This is an intentional fail of the test")
}
