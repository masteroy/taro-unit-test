import { Counter } from './Counter';
import { renderIntoDocument, scryRenderedComponentsWithType } from 'nerv-test-utils';
import { Button } from '@tarojs/components';

describe('<Counter />', () => {
    it('should render properly', () => {
        const component = renderIntoDocument(<Counter initCount={0} />);
        expect(component).toMatchSnapshot();

        const buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).toBe(2);
    });
});
