import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';

import About from '../pages/about';

describe('Enzyme tests', () => {
    test('should render About according to snapshot', () => {
        const wrapper = mount(<About />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})

describe('React testing libray tests', () => {
    test('should render About with title page, text and 4 images', () => {
        const { getAllByTestId, getByTestId } = render(<About />);
        const pageTitle = getByTestId('page-title')
        expect(pageTitle.textContent.trim()).toBe('About');
        const text = getByTestId('text')
        expect(text.textContent.trim()).toBe('This boilerplate uses Nextjs, React v16.8 and Styled components');
        const imgs = getAllByTestId('img');
        expect(imgs.length).toBe(4);
    })
})
