import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createBrand } from "../features/brand/brandClice";

let schema = Yup.object().shape({
  title: Yup.string().required("Brand name is required"),
});

const Addbrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBrand = useSelector((state) => state.brand);
  const { isSuccess, isError, createBrands } = newBrand || {};

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBrand(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-brand");
      }, 2000);
    },
  });

  useEffect(() => {
    if (isSuccess && createBrands) {
      toast.success("🦄 Brand Added Successfully!");
    }
    if (isError) {
      toast.error("🦄 Something went wrong!");
    }
  }, [isSuccess, isError, createBrands, navigate, formik]);

  return (
    <div>
      <h3 className="mb-4 title">Add Brand</h3>
      <form action="" onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          label="Enter blog category title"
          name="title"
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
          value={formik.values.title}
          id="brand"
        />
        <div className="error">
          {formik.touched.title && formik.errors.title}
        </div>
        <button
          type="submit"
          className="btn btn-success border-0 rounded-3 my-5"
        >
          Add brand
        </button>
      </form>
    </div>
  );
};

export default Addbrand;
