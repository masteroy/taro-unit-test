import { MultipleUseEffect } from './MultipleUseEffect';
import { renderIntoDocument } from 'nerv-test-utils';

describe('<MultipleUseEffect />', () => {
    it('should render properly', () => {
        const component = renderIntoDocument(<MultipleUseEffect initCount={0} />);
        expect(component).toMatchSnapshot();
    });
});
