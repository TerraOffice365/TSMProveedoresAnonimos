import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Row, message } from "antd";

export const Attachments = ({ setAttachmentFiles, form }) => {
  const [fileList, setFileList] = useState([]);

  const beforeUpload = (file) => {
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
      message.error("Solo se pueden adjuntar archivos pdf");
    }
    // const isSizeValid = file.size / 1024 / 1024 < 10;
    // if (!isSizeValid) {
    //   message.error("El tamaño del archivo no puede superar los 10MB");
    // }
    return false; //&& isSizeValid;
  };

  const handleChange = async ({ fileList }) => {
    setFileList(fileList);
    setAttachmentFiles(fileList.map(file => file.originFileObj))
    // form.setFieldsValue({ attachmentFiles: fileList });
  };  
  
  const formInputStyle = {
    margin: "10px 10px 10px 10px",
  }

  return (
    <div style={formInputStyle}>
      <Row>
        <Upload
          type="file"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          fileList={fileList}
          multiple={true}
          maxCount={3}
          accept=".pdf"
        >
          <Button icon={<UploadOutlined />}>Adjuntar archivos</Button>
        </Upload>
      </Row>
    </div>
  );
};

export default Attachments;
