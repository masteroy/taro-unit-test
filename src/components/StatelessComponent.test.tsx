import { StatelessComponent } from './StatelessComponent';
import { renderToString } from 'nerv-server';

describe('<Counter />', () => {
    it('should render properly', () => {
        const component = renderToString(<StatelessComponent />);
        expect(component).toMatchSnapshot();
    });
});
