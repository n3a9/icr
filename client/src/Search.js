import React, { useState, useCallback, useEffect } from "react";
import { AutoComplete } from "antd";
import { useHistory } from "react-router-dom";
import courseJSON from "./data/courses.json";
import "./css/Search.css";

const { Option } = AutoComplete;

const Search = () => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);

  const parseCourses = useCallback(() => {
    setCourses(
      courseJSON.map(course => (
        <Option key={course.title} value={course.title.replace(/\s+/g, "")}>
          {`${course.title}: ${course.name}`}
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

  const onSearchSelect = useCallback(
    value => {
      history.push(`/course/${value}`);
    },
    [history]
  );

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
