import { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ResetPasswordDialog = ({ visible, onClose }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useRef(null);

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      setError('Passwords did not match, Try again');
    } else {
      setError('');
      toast.current.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Password reset successful, please login with new password',
        life: 3000,
      });
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  // Reset fields on dialog close
  useEffect(() => {
    if (!visible) {
      setNewPassword('');
      setConfirmPassword('');
      setError('');
    }
  }, [visible]);

  return (
    <>
      <Toast ref={toast} />
      <Dialog
        header="Reset your password"
        visible={visible}
        // style={{ width: '25vw' }}
        className='w-md'
        onHide={onClose}
        pt={{ mask: { className: '!bg-black/70' } }}
      >
        <div className="flex flex-col gap-6 p-4">
          <Password
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="w-full"
            inputClassName='w-full'
          />

          <Password
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full"
            inputClassName='w-full'
            feedback={false}
          />

          {error && <small className="p-error pl-2">{error}</small>}

          <Button label="Reset Password" onClick={handleSubmit} />
        </div>
      </Dialog>
    </>
  );
};

export default ResetPasswordDialog;
