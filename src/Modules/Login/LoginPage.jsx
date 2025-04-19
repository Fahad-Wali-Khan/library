import "primereact/resources/themes/viva-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Card } from "primereact/card";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Image } from 'primereact/image';

import { useState } from "react";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import ResetPasswordDialog from "./ResetPasswordDialog";
import SelectProjectDialog from "./SelectProjectDialog";

const LoginPage = ({
  showCustomerTextBox = true,
  showUsernameTextBox = true,
  showPasswordTextBox = true,
  showProjectDialogBox = true,
  showForgotPasswordButton = true,
}) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResetPasswordDialog, setShowResetPasswordDialog] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const initialValues = {};
  const validationShape = {};

  if (showCustomerTextBox) {
    initialValues.customer = "";
    validationShape.customer = Yup.string().required("Customer is required");
  }

  if (showUsernameTextBox) {
    initialValues.username = "";
    validationShape.username = Yup.string().required("Username is required");
  }

  if (showPasswordTextBox) {
    initialValues.password = "";
    validationShape.password = Yup.string().required("Password is required");
  }

  const validationSchema = Yup.object().shape(validationShape);

  const handleSubmit = (values) => {
    console.log("Submitting form:", values);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (
        values.username === "deepak" &&
        values.password === "1234"
      ) {
        setSubmitError("");
        if (showProjectDialogBox) {
          setShowProjectDialog(true);
        }
      } else {
        setSubmitError("Invalid credentials, please try again");
      }
    }, 1000);
  };

  const projects = [
    { name: 'Webscraping', code: 'NY' },
    { name: 'WebEDI', code: 'RM' },
    { name: 'OTM', code: 'LDN' },
    { name: 'OTM fusion', code: 'IST' }
];

  const showForgotPasswordDialog = () => {
    setShowForgotPassword(true);
  };

  const handleOtpValidated = () => {
    setShowForgotPassword(false);
    setTimeout(() => {
      setShowResetPasswordDialog(true);
    }, 300);
  };

  return (
    <>
      <div className="m-auto max-w-2/9 min-w-96 min-h-screen flex flex-col -border -border-amber-500 justify-center gap-2">
        <div className="-border -border-red-600 min-h-16 flex justify-center select-none">
          <img src="/logo.png" alt="Image" width="250" />
        </div>
        <div className="-border -border-blue-600 min-h-72 mt-2">
          <Card
            pt={{
              root: {
                className:
                  "border border-gray-100 !rounded-xl !shadow-md !bg-gray-100 max-w-87 min-w-95.5",
              },
            }}
            title={
              <div className="text-center text-xl font-bold">
                Login to your Account
              </div>
            }
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-5">
                    {showCustomerTextBox && (
                      <div className="flex flex-col gap-1">
                        <label htmlFor="customer" className="font-semibold">CustomerId</label>
                        <InputText
                          id="customer"
                          name="customer"
                          value={values.customer}
                          onChange={handleChange}
                          placeholder="Enter CustomerId"
                          className="min-w-87 max-w-87"
                          variant="outlined"
                          autoComplete="off"
                          pt={{
                            root: { className: "bg-white" },
                            input: { className: "bg-white focus:bg-white" },
                          }}
                        />
                        {touched.customer && errors.customer && (
                          <small className="p-error pl-2">
                            {errors.customer}
                          </small>
                        )}
                      </div>
                    )}

                    {showUsernameTextBox && (
                      <div className="flex flex-col gap-1">
                      <label htmlFor="username" className="font-semibold">Username</label>
                        <InputText
                          id="username"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          placeholder="Enter Username"
                          className="min-w-87 max-w-87"
                          variant="outlined"
                          autoComplete="off"
                          pt={{
                            root: { className: "bg-white" },
                            input: { className: "bg-white focus:bg-white" },
                          }}
                        />
                        {touched.username && errors.username && (
                          <small className="p-error pl-2">
                            {errors.username}
                          </small>
                        )}
                      </div>
                    )}

                    {showPasswordTextBox && (
                      <div className="flex flex-col gap-1">
                      <label htmlFor="password" className="font-semibold">Password</label>
                        <Password
                          inputId="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          feedback={false}
                          toggleMask={true}
                          placeholder="Enter Password"
                          pt={{
                            root: { className: "w-full" },
                            input: { className: "min-w-87 max-w-87" },
                          }}
                        />
                        {touched.password && errors.password && (
                          <small className="p-error pl-2">
                            {errors.password}
                          </small>
                        )}
                      </div>
                    )}
                    {showForgotPasswordButton && (
                      <Button
                        label="Forgot Password?"
                        text
                        type="button"
                        className="w-fit !pl-1 h-5 !font-normal !text-xs hover:!bg-transparent active:!bg-transparent active:!border-none focus:!outline-none focus:!ring-0 active:!outline-none active:!ring-0 focus:!border-none"
                        onClick={showForgotPasswordDialog}
                      />
                    )}
                  </div>

                  <div className="mt-10 w-full flex justify-center flex-col gap-4 items-center">
                    <Button label="Submit" type="submit" loading={loading} className="max-w-44 min-w-44"/>
                    {submitError != "" && (
                    <div className="p-error mx-auto">{submitError}</div>
                    )}
                  </div>

                  
                  
                </form>
              )}
            </Formik>
          </Card>
          <ForgotPasswordDialog
            visible={showForgotPassword}
            onClose={() => setShowForgotPassword(false)}
            onOtpValidated={handleOtpValidated}
          />
          <ResetPasswordDialog
            visible={showResetPasswordDialog}
            onClose={() => setShowResetPasswordDialog(false)}
          />
          <SelectProjectDialog
            visible={showProjectDialog}
            onClose={() => setShowProjectDialog(false)}
            projects={projects}
            selectedProject={selectedProject}
            onProjectChange={(e) => setSelectedProject(e)}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
