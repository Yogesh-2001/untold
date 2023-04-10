import { Button, Checkbox, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Card } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useState } from "react";

const AddMaterial = () => {
  const [files, setFiles] = useState([]);
  const [details, setDetails] = useState({});
  const onFinish = (values) => {
    setDetails({ ...values, ...files });
    console.log(details);
    console.log("Received values of form: ", values);
    console.log("Uploaded files: ", files);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleFileUpload = (file) => {
    setFiles((prevFiles) => [...prevFiles, file.base64]);
  };

  return (
    <>
      <Card className="col-md-11 col-12 mx-auto p-3">
        <h4 className="text-center mb-4">Add Placement Material Form</h4>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Upload Material"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e && e.fileList;
            }}
          >
            <FileBase64 multiple={true} onDone={handleFileUpload} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default AddMaterial;
