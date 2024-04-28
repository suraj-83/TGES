import React, { useState } from 'react'

const ChangePassword = () => {
  // Define state variables for old password, new password, and confirm password
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Function to handle changes in the old password input
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value)
  }

  // Function to handle changes in the new password input
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value)
  }

  // Function to handle changes in the confirm password input
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    // Check if new password matches confirm password and perform password change logic
    if (newPassword === confirmPassword) {
      // Perform password change logic here
      console.log('Password changed successfully')
      // Clear input fields after successful password change
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } else {
      alert('New password and confirm password do not match')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="old-password">
            Old Password
          </label>
          <input
            id="old-password"
            type="password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter old password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm new password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
