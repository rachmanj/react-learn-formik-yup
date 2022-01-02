import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  country: '',
  state: '',
  zip: '',
};

const validate = Yup.object({
  firstname: Yup.string().required('Harus diisi'),
  lastname: Yup.string().required('Harus diisi'),
  email: Yup.string()
    .required('Harus diisi')
    .email('Must be a valid email address'),
});

const FormOne = () => {
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Formik
          initialValues={initialValues}
          onSubmit={values => console.log(values)}
          validationSchema={validate}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname && touched.firstname ? (
                    <span>{errors.firstname}</span>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname && touched.lastname ? (
                    <span>{errors.lastname}</span>
                  ) : null}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="NL">Netherlands</option>
                  </select>
                  {errors.country ? <span>{errors.country}</span> : null}
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="california">California</option>
                    <option value="toronto">Toronto</option>
                    <option value="utrech">Utrech</option>
                  </select>
                  {errors.state ? <span>{errors.state}</span> : null}
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                  />
                  {errors.zip ? <span>{errors.zip}</span> : null}
                </div>
              </div>

              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormOne;
