import {render, screen, cleanup} from '@testing-library/react';
import EventDialog from "../EventDialog";
import renderer from "react-test-renderer";

test('should render EventDialog component', () => {
    render(<EventDialog/>);

    const buttonElement = screen.getByTestId('newEvent-button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('+ Nouveau');
});

test('should matches EventDialog snapshot', () =>{
    const eventDialogTree = renderer.create(<EventDialog/>).toJSON();
    expect(eventDialogTree).toMatchSnapshot();
});