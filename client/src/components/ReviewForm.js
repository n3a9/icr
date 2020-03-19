import React from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
} from "antd";

const ReviewForm = () => {
  const layout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 8
    }
  };

  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Not a valid email!",
      number: "Not a valid number!"
    },
    number: {
      range: "Must be between ${min} and ${max}"
    }
  };

  return (
    <Form {...layout} size={"middle"} validateMessages={validateMessages}>
      <Form.Item name={["review", "title"]} label="Title">
        <Input />
      </Form.Item>
      <Form.Item name={["review", "instructor"]} label="Instructor">
        <Input />
      </Form.Item>
      <Form.Item name={["review", "description"]} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name={["review", "rating"]}
        label="Rating"
        rules={[
          {
            type: "number",
            min: 0,
            max: 5
          }
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["review", "difficulty"]}
        label="Difficulty"
        rules={[
          {
            type: "number",
            min: 0,
            max: 5
          }
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={["review", "grade"]} label="Grade">
        <Select>
          <Select.Option value="A+">A+</Select.Option>
          <Select.Option value="A">A</Select.Option>
          <Select.Option value="A-">A-</Select.Option>
          <Select.Option value="B+">B+</Select.Option>
          <Select.Option value="B">B</Select.Option>
          <Select.Option value="B-">B-</Select.Option>
          <Select.Option value="C+">C+</Select.Option>
          <Select.Option value="C">C</Select.Option>
          <Select.Option value="C-">C-</Select.Option>
          <Select.Option value="D+">D+</Select.Option>
          <Select.Option value="D">D</Select.Option>
          <Select.Option value="D-">D-</Select.Option>
          <Select.Option value="F">F</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
