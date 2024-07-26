import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import CSS cho ReactQuill
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const AddProduct = () => {
  const [desc, setDesc] = useState(""); // Khởi tạo với chuỗi rỗng

  const handleDesc = (value) => {
    setDesc(value); // Cập nhật giá trị của desc
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    // Xử lý submit tại đây (gửi dữ liệu tới API, v.v.)
    console.log("Product Description:", desc);
  };

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <form onSubmit={handleSubmit}>
        <CustomInput type="text" label="Enter product title" />
        <ReactQuill
          theme="snow"
          value={desc}
          onChange={handleDesc}
          placeholder="Enter product description here..."
        />
        <CustomInput type="numer" label="Enter price" i_class="mt-3" />
        <select name="" id="" className="form-control py-3 my-3">
          <option value="">Select category</option>
        </select>
        <select name="" id="" className="form-control py-3 my-3">
          <option value="">Select color</option>
        </select>
        <select name="" id="" className="form-control py-3 my-3">
          <option value="">Select rand</option>
        </select>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
        <button
          type="submit"
          className="btn btn-success border-0 rounded-3 my-5"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
