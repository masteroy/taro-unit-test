import { Counter } from './Counter';
import { renderToString } from 'nerv-server';

describe('<Counter />', () => {
    it('should render properly', () => {
        const component = renderToString(<Counter initCount={0} />);
        expect(component).toMatchSnapshot();
    });
});
