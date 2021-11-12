import {render, screen, cleanup} from '@testing-library/react';
import EventList from "../../EventList/EventList";
import renderer from "react-test-renderer";

test('should render EventList component', () => {
    
    const data = [{idEvent: '600dc62d-f31a-45db-8b87-537a0970efcd', name: 'test1', description: 'test1', startDate: 'Nov 11th 2021, 6:30 pm', endDate: 'Nov 11th 2021, 6:30 pm'},
                 {idEvent: '0a8fa35e-d0ad-4a0d-8275-690805c62409', name: 'test2', description: 'test2', startDate: 'Nov 11th 2021, 6:30 pm', endDate: 'Nov 11th 2021, 8:19 pm'}];
    
    render(<EventList eventList={data}/>);

    const tableElement = screen.getByTestId('eventList-tableHead');
    const tableBodyElement = screen.getByTestId('eventList-tablebody');


    expect(tableElement).toBeInTheDocument();
    expect(tableBodyElement).toBeInTheDocument();
    
});

test('should matches EventList snapshot', () =>{
    const data = [{idEvent: '600dc62d-f31a-45db-8b87-537a0970efcd', name: 'test1', description: 'test1', startDate: 'Nov 11th 2021, 6:30 pm', endDate: 'Nov 11th 2021, 6:30 pm'},
                 {idEvent: '0a8fa35e-d0ad-4a0d-8275-690805c62409', name: 'test2', description: 'test2', startDate: 'Nov 11th 2021, 6:30 pm', endDate: 'Nov 11th 2021, 8:19 pm'}];

    const eventListTree = renderer.create(<EventList eventList={data}/>).toJSON();
    expect(eventListTree).toMatchSnapshot();
});