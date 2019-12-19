import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import Blog from "../pages/blog";

const __POSTS__ = [
  {
    id: "1",
    title: "title A",
    text: "qdjqfndjkvqndfv",
    date: "2016-03-01T12:00",
    src: "react_testing_library.webp"
  },
  {
    id: "2",
    title: "title B",
    text: "vfqdvqdfv",
    date: "2017-03-01T12:00",
    src: "react_testing_library.webp"
  },
  {
    id: "3",
    title: "title C",
    text: "vqdfvqfq",
    date: "2018-03-01T12:00",
    src: "react_testing_library.webp"
  }
];

describe("Enzyme tests", () => {
  test("should render About according to snapshot", () => {
    const wrapper = mount(<Blog posts={__POSTS__} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("React testing libray tests", () => {
  test("renders post sorted desc", () => {
    const blog = mount(<Blog posts={__POSTS__} />);
    blog.find("select").simulate("change", { target: { value: "desc" } });

    expect(
      blog
        .find(".Post__List")
        .childAt(0)
        .find("h3")
        .text()
    ).toEqual("title C");
  });

  test("renders post sorted asc", () => {
    const blog = mount(<Blog posts={__POSTS__} />);
    blog.find("select").simulate("change", { target: { value: "asc" } });

    expect(
      blog
        .find(".Post__List")
        .childAt(0)
        .find("h3")
        .text()
    ).toEqual("title A");
  });
});
