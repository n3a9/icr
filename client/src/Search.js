import React, { useState, useCallback, useEffect } from "react";
import { AutoComplete } from "antd";
import courseJSON from "./data/courses.json";
import "./css/Search.css";

const { Option } = AutoComplete;

const Search = () => {
  const [courses, setCourses] = useState([]);

  const parseCourses = useCallback(() => {
    let courseNames = new Set();

    courseJSON.map(course =>
      courseNames.add(`${course.Subject} ${course.Number}`)
    );

    setCourses(
      Array.from(courseNames).map(course => (
        <Option key={course} value={course}>
          {course}
        </Option>
      ))
    );
  }, [setCourses]);

  const filter = useCallback(
    (input, option) =>
      option.props.children
        .toUpperCase()
        .substring(0, input.length)
        .indexOf(input.toUpperCase()) !== -1 ||
      option.props.children.toUpperCase().indexOf(input.toUpperCase()) !== -1,
    []
  );

  const onSearchSelect = useCallback(console.log("Selected!"));

  useEffect(parseCourses, []);

  return (
    <AutoComplete
      className="searchbar"
      dataSource={courses}
      placeholder="Search for a Course"
      filterOption={filter}
      onSelect={onSearchSelect}
    />
  );
};

export default Search;
