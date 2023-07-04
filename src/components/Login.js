import React from "react";
import { useFormik } from "formik";
import {LoginSchema} from '../schemas/LoginSchema'

    const initialValues = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };

const Login = (props) => {

        const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: LoginSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
              console.log(values);
              action.resetForm();
            },
          });
      
        console.log(errors); 

    return (

        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input
                 type="email"
                 autoComplete="off"
                 name="email"
                 id="email"
                 placeholder="Email"
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}  
                />
                {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                ) : null}
                
                <label htmlFor="password">password</label>
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

                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login;