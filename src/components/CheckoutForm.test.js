import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render , screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {

    render(<CheckoutForm/>)

});
    
test("shows success message on submit with form details", () => {
    //1. Arrange
    render(<CheckoutForm/>)  
    
    //2. Act
    const firstName = screen.getByLabelText(/First Name/i)
    userEvent.type(firstName, "Divya");

    const lastName = screen.getByLabelText(/Last Name/i)
    userEvent.type(lastName, "Rahul");

    const address = screen.getByLabelText(/Address/i)
    userEvent.type(address, "123 Street");

    const city = screen.getByLabelText(/City/i)
    userEvent.type(city, "World");

    const state = screen.getByLabelText(/State/i)
    userEvent.type(state, "Earth");

    const zip = screen.getByLabelText(/Zip/i)
    userEvent.type(zip, "01234");

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    //3. Assert

    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent('You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Divya Rahul123 StreetWorld, Earth 01234')

});
