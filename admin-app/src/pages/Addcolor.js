import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createColor } from "../features/color/colorClice";
import { resetState } from "../features/blog/blogClice";

let schema = Yup.object().shape({
  title: Yup.string().required("Color name is required"),
});

const Addcolor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, createcolor } = newColor || {};
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-color");
        dispatch(resetState());
      }, 2000);
    },
  });

  useEffect(() => {
    if (isSuccess && createcolor) {
      toast.success("Color Added Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, createcolor, navigate, formik]);

  return (
    <div>
      <h3 className="mb-4 title">Add Color</h3>
      <form action="" onSubmit={formik.handleSubmit}>
        <CustomInput
          type="color"
          label="Enter Color"
          name="title"
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
          value={formik.values.title}
          id="color"
        />
        <div className="error">
          {formik.touched.title && formik.errors.title}
        </div>
        <button
          type="submit"
          className="btn btn-success border-0 rounded-3 my-5"
        >
          Add Color
        </button>
      </form>
    </div>
  );
};

export default Addcolor;
