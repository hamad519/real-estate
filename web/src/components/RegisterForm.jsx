import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {

    const {handleSubmit, handleChange, handleBlur, values, errors, touched, setFieldValue} = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          userName:'',
          email: '',
          phoneNumber: '',
          password:'',
          cPassword:'',
          avatar:''

        },
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          phoneNumber: Yup.string().required('Required'),
          password:Yup.string().required('Required'),
          cPassword:Yup.string().required('Required'),
          avatar:Yup.string().required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <>
    <div className="contact-form spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact__form__title">
                        <h2>Create new Account</h2>
                    </div>
                </div>
            </div>
            <form action="#">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <span style={{color:'red', fontSize:'12px'}}>{touched.firstName && errors.firstName ? errors.firstName:null}</span>
                        <input name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Your first name"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <span style={{color:'red', fontSize:'12px'}}>{touched.lastName && errors.lastName ? errors.lastName:null}</span>
                        <input name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Your last name"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input name="userName" value={values.userName} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Your username"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Your Email"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Enter Password"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input name="cPassword" value={values.cPassword} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Confirm Password"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input name="phoneNumber" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Enter Phone Number"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input name="avatar" value={values.avatar} onChange={handleChange} onBlur={handleBlur} type="file" placeholder="Upload Image"/>
                    </div>
                    <div className="col-lg-12 text-center"> 
                        <button type="submit" className="site-btn">CREATE ACCOUNT</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default RegisterForm