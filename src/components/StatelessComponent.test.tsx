import { StatelessComponent } from './StatelessComponent';
import { renderIntoDocument } from 'nerv-test-utils';

describe('<Counter />', () => {
    it('should render properly', () => {
        const component = renderIntoDocument(<StatelessComponent />);
        expect(component).toMatchSnapshot();
    });
});
