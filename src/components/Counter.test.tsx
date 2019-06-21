import { Counter } from './Counter';
import { renderToString } from 'nerv-server';

describe('<OccupancyPage />', () => {
    it('should render null if childAges = []', () => {
        const component = renderToString(<Counter initCount={0} />);
        expect(component).toMatchSnapshot();
    });
});
