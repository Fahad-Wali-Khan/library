import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputOtp } from 'primereact/inputotp';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordDialog = ({ visible, onClose, onOtpValidated }) => {
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [otpError, setOtpError] = useState('');

  const initialValues = { email: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleGetOtp = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setEmail(values.email);
    }, 1000);
  };

  const handleValidateOtp = () => {
    if (otp === '1234') {
      setOtpError('');
      onOtpValidated();
    } else {
      setOtpError('Invalid OTP. Please contact admin');
    }
  };

  const handleClose = () => {
    onClose();
  };

  // Reset state when dialog closes
  useEffect(() => {
    if (!visible) {
      setOtpSent(false);
      setOtp('');
      setEmail('');
      setOtpError('');
    }
  }, [visible]);

  return (
    <Dialog
      header="Reset password using your email"
      visible={visible}
      // style={{ width: '25vw' }}
      className='w-md'
      onHide={handleClose}
      pt={{ mask: { className: '!bg-black/70' } }}
    >
      <div className="p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleGetOtp}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div>
                  <InputText
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    disabled={otpSent}
                    className="w-full"
                  />
                  {touched.email && errors.email && (
                    <small className="p-error pl-2">{errors.email}</small>
                  )}
                </div>

                {!otpSent ? (
                  <Button
                    type="submit"
                    label="Get OTP"
                    loading={loading}
                    className="w-full"
                  />
                ) : (
                  <>
                    <span className="text-sm text-green-600">
                      OTP sent to <strong>{email}</strong>
                    </span>
                    <InputOtp
                      type='tel'
                      length={4}
                      value={otp}
                      onChange={(e) => setOtp(e.value)}
                      className="w-full"
                    />
                    {otpError && <small className="p-error pl-2">{otpError}</small>}

                    <Button
                      label="Validate"
                      onClick={handleValidateOtp}
                      className="w-full"
                      type="button"
                    />
                  </>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
