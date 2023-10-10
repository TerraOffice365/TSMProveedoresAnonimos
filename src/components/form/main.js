import React from "react";
import { Layout, Row, Col } from "antd";
import { AiOutlineFilePdf, AiOutlineContacts } from "react-icons/ai";
import CodigoEtica from "../../assets/documents/Codigo de Etica.pdf";
import DeclaracionJurada from "../../assets/documents/Declaracion Jurada.pdf";
import Decreto20217 from "../../assets/documents/Decreto 202-17.pdf";
import FormFisicas from "../../assets/documents/Formulario Decreto 202 - Físicas.pdf";
import FormJuridicas from "../../assets/documents/Formulario Decreto 202 - Jurídicas.pdf";

const subHeaderStyle = {
  textAlign: "left",
  height: 32,
  paddingInline: 20,
  lineHeight: "32px",
  color: "#ffffff",
  backgroundColor: "#0f77a4",
};

const documentListStyle = {
  height: 35,
  textAlign: "left",
  backgroundColor: "#14a0db",
  margin: "5px",
  verticalAlign: "middle",
  display: "flex",
  alignItems: "center",
  color: "white"
};

const formLinkStyle = {
  height: 185,
  textAlign: "center",
  padding: "15px",
  backgroundColor: "#14a0db",
  margin: "5px",
  verticalAlign: "middle",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const textStyle = {
  margin: "auto",
  maxWidth: "900px",
  display: "flex",
  padding: "10px 10px 30px",
  textAlign: "left",
  color: "black",
  overflow: "auto",
  backgroundColor: "#ffffff",
  overflowY: "auto",
  flexDirection: "column",
};

const colStyle = {
  flex: "1",
};

export const LandingPage = () => {
  return (
    <div>
      <Layout style={subHeaderStyle}>Home</Layout>
      <Layout style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
        dignissim mi, a cursus arcu. Aliquam in quam metus. Proin sit amet enim
        urna. Sed sapien mauris, dictum nec dui vitae, fringilla faucibus justo.
        Duis pulvinar eros eget massa varius rutrum. Vivamus nec sapien sit amet
        nunc efficitur consequat ac quis augue. Sed sodales ex metus, nec
        posuere nunc rutrum sed. Sed quis massa sit amet enim scelerisque
        placerat at ac massa. Etiam tristique pretium ligula at tempus. Duis at
        facilisis ipsum. Integer pellentesque arcu ante, ut lobortis ante porta
        ac. Proin lacinia ex eget aliquet accumsan. In non vehicula felis. Fusce
        lobortis pulvinar nulla, a semper mauris dapibus quis. Nullam rhoncus
        magna ut lectus porttitor molestie quis quis risus. Integer odio nibh,
        lacinia eu consequat eget, elementum quis purus. Fusce sed elit ac ipsum
        sollicitudin aliquam. Fusce ipsum risus, dapibus dapibus ultricies eu,
        auctor ut magna. Nulla mauris ex, scelerisque non orci a, egestas
        bibendum tellus. Vivamus malesuada at nisi in laoreet. Etiam vel
        elementum odio. Cras eu congue augue. Nullam fermentum tempus dolor, sed
        tincidunt dolor pulvinar at. Phasellus cursus leo mi, in tempor turpis
        tempus aliquam. Praesent feugiat magna turpis, a laoreet augue elementum
        at. Morbi consequat diam quis odio pellentesque, sit amet posuere nisi
        convallis.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
        dignissim mi, a cursus arcu. Aliquam in quam metus. Proin sit amet enim
        urna. Sed sapien mauris, dictum nec dui vitae, fringilla faucibus justo.
        Duis pulvinar eros eget massa varius rutrum. Vivamus nec sapien sit amet
        nunc efficitur consequat ac quis augue. Sed sodales ex metus, nec
        posuere nunc rutrum sed. Sed quis massa sit amet enim scelerisque
        placerat at ac massa. Etiam tristique pretium ligula at tempus. Duis at
        facilisis ipsum. Integer pellentesque arcu ante, ut lobortis ante porta
        ac. Proin lacinia ex eget aliquet accumsan. In non vehicula felis. Fusce
        lobortis pulvinar nulla, a semper mauris dapibus quis. Nullam rhoncus
        magna ut lectus porttitor molestie quis quis risus. Integer odio nibh,
        lacinia eu consequat eget, elementum quis purus. Fusce sed elit ac ipsum
        sollicitudin aliquam. Fusce ipsum risus, dapibus dapibus ultricies eu,
        auctor ut magna. Nulla mauris ex, scelerisque non orci a, egestas
        bibendum tellus. Vivamus malesuada at nisi in laoreet. Etiam vel
        elementum odio. Cras eu congue augue. Nullam fermentum tempus dolor, sed
        tincidunt dolor pulvinar at. Phasellus cursus leo mi, in tempor turpis
        tempus aliquam. Praesent feugiat magna turpis, a laoreet augue elementum
        at. Morbi consequat diam quis odio pellentesque, sit amet posuere nisi
        convallis.
      </Layout>
      <Row style={{ display: "flex", maxWidth: "900px", margin: "auto" }}>
        <Col style={{ ...colStyle, flex: 6 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href={CodigoEtica} target="_blank" style={{textDecoration: "none"}}>
              <Row style={documentListStyle}>
                <AiOutlineFilePdf
                  style={{ color: "red", fontSize: "25px", marginRight: "5px" }}
                />{" "}
                <b>Código de Ética</b>
              </Row>
            </a>
            <a href={DeclaracionJurada} target="_blank" style={{textDecoration: "none"}}>
              <Row style={documentListStyle}>
                <AiOutlineFilePdf
                  style={{ color: "red", fontSize: "25px", marginRight: "5px" }}
                />{" "}
                Declaración Jurada
              </Row>
            </a>
            <a href={Decreto20217} target="_blank" style={{textDecoration: "none"}}>
              <Row style={documentListStyle}>
                <AiOutlineFilePdf
                  style={{ color: "red", fontSize: "25px", marginRight: "5px" }}
                />{" "}
                Decreto 202-17
              </Row>
            </a>
            <a href={FormFisicas} target="_blank" style={{textDecoration: "none"}}>
              <Row style={documentListStyle}>
                <AiOutlineFilePdf
                  style={{ color: "red", fontSize: "25px", marginRight: "5px" }}
                />{" "}
                Formulario Decreto 202 - Físicas
              </Row>
            </a>
            <a href={FormJuridicas} target="_blank" style={{textDecoration: "none"}}>
              <Row style={documentListStyle}>
                <AiOutlineFilePdf
                  style={{ color: "red", fontSize: "25px", marginRight: "5px" }}
                />{" "}
                Formulario Decreto 202 - Jurídicas
              </Row>
            </a>
          </div>
        </Col>
        <Col style={{ ...colStyle, flex: 3 }}>
          <a href="/form" style={{ textDecoration: "none", color: "white" }}>
            <div style={formLinkStyle}>
              Cargá tus datos
              <AiOutlineContacts
                style={{ fontSize: "75px", marginRight: "5px" }}
              />{" "}
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
