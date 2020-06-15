import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    
    const header = screen.getByText(/checkout form/i)
    
    expect(header).toBeInTheDocument()
    
    // breakTheTest();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    
    const firstName = screen.getByLabelText("First Name:")
    const lastName = screen.getByLabelText("Last Name:")
    const address = screen.getByLabelText("Address:")
    const city = screen.getByLabelText("City:")
    const state = screen.getByLabelText("State:")
    const zip = screen.getByLabelText("Zip:")

    fireEvent.change(firstName, { target: { value: 'Jane'}})
    fireEvent.change(lastName, { target: { value: 'Doe'}})
    fireEvent.change(address, { target: {
    value: '1234 Road Rd.'}})
    fireEvent.change(city, { target: {
    value: 'Cityland'}})
    fireEvent.change(state, { target: { 
    value: 'Iowa'}})
    fireEvent.change(zip, { target: {
    value: '12345'}})

    const submitButton = screen.getByTestId("checkout")
    fireEvent.click(submitButton);

    const newPerson = screen.getByText(/Jane/i);
    expect(newPerson).toBeInTheDocument();
    // breakTheTest();
});

// function breakTheTest() {
//     throw new Error("This is an intentional fail of the test")
// }
