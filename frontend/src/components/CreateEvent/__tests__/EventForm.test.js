import {render, screen, cleanup} from '@testing-library/react';
import EventForm from "../EventForm";
import renderer from "react-test-renderer";

test('should render EventForm component', () => {
    render(<EventForm/>);

    const formElement = screen.getByTestId('newEvent-form');
    const nameInputElement = screen.getByTestId('eventName-input');
    const descriptionInputElement = screen.getByTestId('eventDescription-input');


    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveTextContent('Data/heure de début');
    expect(formElement).toHaveTextContent('Data/heure de fin');
    expect(nameInputElement).toBeInTheDocument();
    expect(descriptionInputElement).toBeInTheDocument();
});

