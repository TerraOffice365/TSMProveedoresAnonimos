import React, { useState } from "react";
import { Button, Form, message, Steps, theme, Checkbox } from "antd";
import { GeneralInfo } from "./general-info";
import { ContactInfo } from "./contact-info";
import Attachments from "./attachments";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MultipartForm = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [attachmentFiles, setAttachmentFiles] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  
  const next = async () => {
    if (await form.validateFields()) {
      setCurrent(current + 1);
    }
  };
  const prev = async () => {
    setCurrent(current - 1);
  };

  const onReset = () => {
    form.resetFields();
    navigate("/");
  };

  const handleFinalize = async () => {
    try {
      if (attachmentFiles.length === 0) {
        message.error("Por favor adjunte por lo menos un archivo.");
        return;
      }

      if (!isChecked) {
        message.error("Debe indicar que leyó el Código de Ética");
        return;
      }

      const formData = form.getFieldValue();
      form.validateFields();

      const formattedRubros = formData.Rubros.join(";");

      formData.Rubros = formattedRubros;

      const response = await axios
        .post(
          "https://prod-19.brazilsouth.logic.azure.com:443/workflows/77816755bddf4ae1bb8bc55a270e98f8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2P-qfnfhyf0-8pITXSAaGWmu6rSyNmdiyRMFpRUZybc",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      const idRespuesta = response.data.IdRegistro;
      const uploadPromises = attachmentFiles.map(async (file) => {
        var JSONFormData = { "NombreArchivo": file.name, "IdRegistro": idRespuesta.toString() };
        var bodyFormData = new FormData();

        bodyFormData.append("resume", file);
        bodyFormData.append("formdata", JSON.stringify(JSONFormData));

        await axios.post(
          "https://prod-01.brazilsouth.logic.azure.com/workflows/09b5f5fb918a47d485958b3e787271d8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hYv4_5ZbwgfIFmsZKyYCkBjo5V6MmfaUCpU-Vqp8ikk",
          bodyFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
      });
      await Promise.all(uploadPromises);
      message.success("Operación completada");
    } catch (error) {
      console.log(error);
      message.error("Ocurrió un error durante la operación.");
    }
  };

  const steps = [
    {
      title: "Datos Generales",
      content: <GeneralInfo form={form} />,
    },
    {
      title: "Datos de Contacto",
      content: <ContactInfo form={form} />,
    },
    {
      title: "Adjuntos",
      content: (
        <Attachments setAttachmentFiles={setAttachmentFiles} form={form} />
      ),
    },
  ];
  
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const stepsStyle = {
    "margin": "auto",
    "maxWidth": "900px",
    padding: "10px 10px 0px 10px"
  }

  const contentStyle = {
    "margin": "auto",
    "maxWidth": "900px",
    textAlign: "left",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div>
      <Form form={form} onFinish={handleFinalize}>
        <Steps style={stepsStyle} current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        {current === steps.length - 1 && (
          <Checkbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            style={{ marginTop: "15px" }}
          >
            He leído el Código de Ética
          </Checkbox>
        )}
        <div style={{ marginTop: 25 }}>
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Anterior
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Siguiente
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" htmlType="submit" disabled={!isChecked}>
              Finalizar
            </Button>
          )}
          <Button 
            style={{
              textAlign: "left",
              margin: "0 8px",
              backgroundColor: "lightgrey"
            }}
            onClick={() => onReset()}
            >
              Cerrar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MultipartForm;
