import { MultipleUseEffect } from './MultipleUseEffect';
import { renderToString } from 'nerv-server';

describe('<MultipleUseEffect />', () => {
    it('should render properly', () => {
        const component = renderToString(<MultipleUseEffect initCount={0} />);
        expect(component).toMatchSnapshot();
    });
});
