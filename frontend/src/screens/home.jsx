import React, { useState, useRef } from 'react';

const HomePage = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    // You may want to redirect the user to the login page or perform other actions
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // You can perform additional validations or actions with the uploaded file
    console.log('File Uploaded:', file);
    setUploadedFile(file);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>Welcome, John!</h2>
      <p>Upload PDF to start taking mock tests</p>
      <div style={{ textAlign: 'center' }}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <button onClick={() => fileInputRef.current.click()}>Upload PDF</button>
      </div>
      {uploadedFile && (
        <div>
          <p>Uploaded File: {uploadedFile.name}</p>
          {/* Add additional rendering or processing for the uploaded file if needed */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
