import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../components/Footer';

describe('Enzyme tests', () => {
    test('should render Footer according to snapshot', () => {
        const wrapper = mount(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})

describe('React testing libray tests', () => {
    test('should render Footer with copyright', () => {
        const { getByTestId } = render(<Footer />);
        const copyrights = getByTestId('copyright');
        expect(copyrights.textContent.trim()).toBe('© 2019')
    })
})
