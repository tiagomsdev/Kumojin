import {render, screen, cleanup} from '@testing-library/react';
import HomeEvents from "../HomeEvents";
import renderer from "react-test-renderer";

test('should render HomeEvents component', () => {
    
    render(<HomeEvents/>);

    const appBarElement = screen.getByTestId('homeEvents-appBar');


    expect(appBarElement).toBeInTheDocument();
    expect(appBarElement).toHaveTextContent("Liste d'événements");
    
});

test('should matches HomeEvents snapshot', () =>{
    
    const homeEventsTree = renderer.create(<HomeEvents/>).toJSON();
    expect(homeEventsTree).toMatchSnapshot();
});