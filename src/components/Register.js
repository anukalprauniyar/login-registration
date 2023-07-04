import React from "react";
import { useFormik } from "formik";
import {RegisterSchema} from '../schemas/RegisterSchema'

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

const Register = (props) => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            type="name"
            autoComplete="off"
            name="name" 
            id="name" 
            placeholder="full Name" 
            onChange={handleChange}
            onBlur={handleBlur}
            />
             {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}

            <label htmlFor="email">Email</label>
            <input 
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
            ) : null}

            <label htmlFor="password">Password</label>
            <input 
             type="password"
             autoComplete="off"
             name="password"
             id="password"
             placeholder="Password"
             value={values.password}
             onChange={handleChange}
             onBlur={handleBlur}
            />
             {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}

            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register;