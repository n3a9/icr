import React from "react";
import { message, Form, Input, Modal, Rate, Select, Slider } from "antd";

import { addReview } from "../utils/api";
import { FrownOutlined } from "@ant-design/icons";
import "../css/ReviewForm.css";

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 12
  }
};

const validateMessages = {
  required: "This field is required!"
};

const rateDescription = ["Terrible", "Bad", "Decent", "Good", "Wonderful"];
const difficultyDescription = [
  "Super Easy",
  "Easy",
  "Moderate",
  "Hard",
  "Super Hard"
];

message.config({
  top: 100,
  duration: 5
});

const ReviewForm = ({ visible, hideModal, title, instructors }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Create a new review!"
      okText="Create"
      cancelText="Cancel"
      onCancel={hideModal}
      onOk={() => {
        form
          .validateFields()
          .then(async data => {
            const reviewAdded = await addReview(title, data.review);
            if (reviewAdded) {
              message.success("Review posted!");
              form.resetFields();
            } else {
              message.error("Error posting review!");
            }
            hideModal();
          })
          .catch(info => {
            message.error("Error posting review!");
          });
      }}
    >
      <Form
        {...layout}
        form={form}
        size={"middle"}
        validateMessages={validateMessages}
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
              message: "Please add a rating!"
            }
          ]}
        >
          <Rate tooltips={rateDescription} allowHalf />
        </Form.Item>
        <Form.Item
          name={["review", "difficulty"]}
          label="Difficulty"
          rules={[
            {
              required: true,
              message: "Please add a difficulty!"
            }
          ]}
        >
          <Rate
            className="difficultyDisplay"
            character={<FrownOutlined />}
            tooltips={difficultyDescription}
            allowHalf
          />
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
      </Form>
    </Modal>
  );
};

export default ReviewForm;
