import React, { useRef, useState } from "react";
import axios from "axios";
import Dummy from "./Dummy"

const FileUpload = () => {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => 
  {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      setUploadStatus("uploading");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://localhost:8000/api/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      setUploadStatus("done");
    } catch (error) {
      setUploadStatus("select");
    }
  };

  return (
    <div className="file-upload">
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* Plus icon to trigger the file input dialog */}
      <button style={{height: '2rem',width:'4.5rem',borderRadius: '99px',backgroundColor:'grey',cursor: 'pointer',marginLeft: '0.5rem',color:'white'}} onClick={onChooseFile} >
        <span className="material-symbols-outlined"></span> Add File
      </button>

      {selectedFile && (
        <div className="file-preview">
          <span className="material-symbols-outlined icon">description</span>
          <span className="file-name">{selectedFile.name}</span>
          <button className="remove-file" onClick={clearFileInput}>
            <span className="material-symbols-outlined close-icon">
              close
            </span>
          </button>
        </div>
      )}

      <button style={{height: '2rem',width:'4.5rem',borderRadius: '99px',backgroundColor:'grey',cursor: 'pointer',marginLeft: '0.5rem',color:'white'}} onClick={handleUpload}>
        {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
      </button>
    </div>
  );
};

export default FileUpload;

