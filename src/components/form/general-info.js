import React, { useEffect, useState } from "react";
import { Col, Row, Form, Input, Select } from "antd";
import axios from "axios";

const { Option } = Select;

export const GeneralInfo = ({ form }) => {
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await axios.get(
        "https://prod-15.brazilsouth.logic.azure.com:443/workflows/e395a93b7bb84fd0b4181d4d90a210c5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=a3nCK48TwlPXW5zAvFbLOB6GH1u3tRNFeHvwl3K3G5w"
      );
      const results = data.map((category) => ({
        key: category.IdRubro,
        value: category.DescRubro,
      }));

      setCategoryOptions(results);
    }

    fetchCategories();
  }, []);

  const formInputStyle = {
    margin: "5px 5px 0px 5px",
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              rules={[{ required: true, message: "Campo requerido" }]}
              label="Razón social"
              name="RazonSocial"
            >
              <Input />
            </Form.Item>
          </div>
        </Col>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              rules={[{ required: true, message: "Campo requerido" }]}
              label="Nombre de Fantasía"
              name="NombreFantasia"
            >
              <Input />
            </Form.Item>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              rules={[{ required: true, message: "Campo requerido" }]}
              label="Personería"
              name="Personeria"
            >
              <Select
                placeholder="Seleccione una personería"
                options={[
                  { value: "Física" },
                  { value: "Jurídica" },
                  { value: "Soc. de Hecho" },
                  { value: "UTE" },
                  { value: "Cooperativa" },
                  { value: "Universidad" },
                ]}
              />
            </Form.Item>
          </div>
        </Col>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              rules={[{ required: true, message: "Campo requerido" }]}
              label="Rubros"
              name="Rubros"
            >
              <Select
                placeholder="Seleccione un rubro"
                mode="multiple"
                allowClear
              >
                {categoryOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              rules={[
                { required: true, message: "Campo requerido" },
                {
                  validator: (_, value) => {
                    const regex = /^[0-9]{2}-[0-9]{8}-[0-9]$/;
                    if (!regex.test(value)) {
                      return Promise.reject(
                        "Por favor, utilice el formato xx-xxxxxxxx-x."
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
              label="CUIT"
              name="Cuit"
            >
              <Input placeholder="xx-xxxxxxxx-x" />
            </Form.Item>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GeneralInfo;
