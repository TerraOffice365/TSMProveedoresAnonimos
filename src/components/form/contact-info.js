import React, { useEffect, useState } from "react";
import { Col, Row, Form, Input, Select } from "antd";
import axios from "axios";

const { Option } = Select;

export const ContactInfo = ({ form }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const provinciaKey = selectedCountry
    ? `provincia-${selectedCountry}`
    : "provincia-default";

  useEffect(() => {
    async function fetchCountries() {
      const { data } = await axios.get(
        "https://restcountries.com/v3.1/all?fields=translations"
      );
      const results = data.map((country) => ({
        value: country.translations.spa.common,
      }));

      results.sort((a, b) => a.value.localeCompare(b.value));

      setCountryOptions(results);
    }

    async function fetchProvinces() {
      const { data } = await axios.get(
        "https://apis.datos.gob.ar/georef/api/provincias?campos=nombre"
      );
      const results = data.provincias.map((province) => ({
        value: province.nombre,
      }));

      results.sort((a, b) => a.value.localeCompare(b.value));

      setProvinceOptions(results);
    }

    fetchCountries();
    fetchProvinces();
  }, []);

  const formInputStyle = {
    margin: "5px 5px 0px 5px"
  }

  return (
    <div>
      <Row>
        <Col span={12}>
          <div style={formInputStyle}>
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              { required: true, message: "Campo requerido" },
              { type: "email", message: "El email ingresado no es válido" },
            ]}
          >
            <Input />
          </Form.Item>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item label="Teléfono" name="Telefono">
              <Input />
            </Form.Item>
          </div>
        </Col>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item label="Web" name="PaginaWeb">
              <Input />
            </Form.Item>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              label="País"
              name="Pais"
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Select
                placeholder="Seleccione un país"
                onChange={(value) => {
                  handleCountryChange(value);
                }}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                  option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {countryOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </Col>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              label="Provincia"
              name="Provincia"
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              {selectedCountry === "Argentina" ? (
                <Select
                  placeholder="Seleccione una provincia"
                  key={provinciaKey}
                  filterOption={(input, option) =>
                    option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                      0 ||
                    option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {provinceOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              ) : (
                <Input key={provinciaKey} />
              )}
            </Form.Item>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={formInputStyle}>
            <Form.Item
              label="Ciudad"
              name="Ciudad"
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Col>
        <Col span={5}>
          <div style={formInputStyle}>
            <Form.Item
              label="Cód. Postal"
              name="CodigoPostal"
              rules={[{ required: true, message: "Campo requerido" }]}
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
              label="Calle"
              name="Calle"
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Col>
        <Col span={4}>
          <div style={formInputStyle}>
            <Form.Item
              name="Altura"
              label="Altura"
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Col>
        <Col span={3}>
          <div style={formInputStyle}>
            <Form.Item label="Depto" name="Departamento">
              <Input />
            </Form.Item>
          </div>
        </Col>
        <Col span={3}>
          <div style={formInputStyle}>
            <Form.Item label="Piso" name="Piso">
              <Input />
            </Form.Item>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactInfo;
