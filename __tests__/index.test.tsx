import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';

import Index from '../pages/index';

describe('Enzyme tests', () => {
    test('should render Index according to snapshot', () => {
        const wrapper = mount(<Index />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})

describe('React testing libray tests', () => {
    test('should render Index with title page and text', () => {
        const { getByTestId } = render(<Index />);
        const pageTitle = getByTestId('page-title')
        expect(pageTitle.textContent.trim()).toBe('Home page');
        const text = getByTestId('text')
        expect(text.textContent.trim()).toBe('Welcome to your coding test 💻 Your tasks will be to:');
    })
})
