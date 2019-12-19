import React from 'react';
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json';

import Layout from '../components/Layout';

describe('Enzyme tests', () => {
    test('should render Layout according to snapshot', () => {
        const wrapper = mount(<Layout>Hello</Layout>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})