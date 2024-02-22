"use client";
import React from "react";
import Style from "./assets/css/addUsers.module.css";
import { Button, Form, Input } from "antd";

type FieldType = {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
};

const Register: React.FC = () => {
  return (
    <div className={Style.conatiner}>
      <div className="">
        <Form layout="vertical">
          <Form.Item<FieldType>
            label="Firstname"
            name="firstname"
            rules={[{ required: true, message: "Firstname is required." }]}
          >
            <Input placeholder="Enter firstname" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Lastname"
            name="lastname"
            rules={[{ required: true, message: "Lastname is required." }]}
          >
            <Input placeholder="Enter lastname" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email Address"
            name="email"
            rules={[{ required: true, message: "Email is required." }]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
