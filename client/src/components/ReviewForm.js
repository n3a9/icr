import React from "react";
import {
  message,
  Form,
  Button,
  Input,
  Select,
  InputNumber,
  Slider
} from "antd";

import { addReview } from "../utils/api";
import "../css/ReviewForm.css";

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 12
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12
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

message.config({
  top: 100,
  duration: 5
});

const ReviewForm = props => {
  const { title, instructors } = props;
  const [form] = Form.useForm();

  const onFinish = async data => {
    const reviewAdded = await addReview(title, data.review);
    if (reviewAdded) {
      message.success("Review posted!");
      form.resetFields();
    } else {
      message.error("Error posting review!");
    }
  };

  return (
    <Form
      {...layout}
      form={form}
      size={"middle"}
      validateMessages={validateMessages}
      onFinish={onFinish}
      className="reviewForm"
    >
      <Form.Item
        name={["review", "title"]}
        label="Title"
        rules={[
          {
            required: true,
            message: "Please add a review title!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      {instructors[0] !== "" && (
        <Form.Item
          name={["review", "instructor"]}
          label="Instructor"
          rules={[
            {
              required: true,
              message: "Please select an instructor!"
            }
          ]}
        >
          <Select>
            {instructors.map(i => (
              <Select.Option value={i}>{i}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      )}
      <Form.Item
        name={["review", "body"]}
        label="Description"
        rules={[
          {
            required: true,
            message: "Please add a review!"
          }
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name={["review", "rating"]}
        label="Rating"
        rules={[
          {
            required: true,
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
            required: true,
            type: "number",
            min: 0,
            max: 5
          }
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={["review", "grade"]} label="Grade">
        <Slider
          marks={{
            90: "A",
            80: "B",
            70: "C",
            60: "D",
            50: "F"
          }}
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
