import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "./assets/Logo.png";
import { Layout } from "antd";
import MultipartForm from "./components/form/form";
import { LandingPage } from "./components/form/main";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  fontSize: "20px",
  color: "#fff",
  display: "flex",
  padding: "0 20px 0 20px",
  height: 85,
  lineHeight: "80px",
  backgroundColor: "#14a0db",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  color: "#ffffff",
  padding: "0 0 5em",
  backgroundColor: "#ffffff",
};

const footerStyle = {
  color: "#ffffff",
  backgroundColor: "#14a0db",
  padding: 0,
  position: "fixed",
  height: 85,
  left: 0,
  bottom: 0,
  right: 0,
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "80px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Header style={headerStyle}>
            <img alt="TSM" src={Logo} height={85} style={{ marginRight: 20 }}/>
            <div>
              <HeaderTitle />
            </div>
          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/form" element={<MultipartForm />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </Content>
          <Footer style={footerStyle}>© 2023 Termoeléctrica José de San Martín S.A.</Footer>
        </Layout>
      </BrowserRouter>
    </>
  );
};

const HeaderTitle = () => {
  const location = useLocation();
  const [currentTitle, setCurrentTitle] = useState("Default Header");

  const routeToTitle = {
    "/": "Portal Proveedores",
    "/form": "Formulario de Alta / Actualización de Datos",
  };

  useEffect(() => {
    const newTitle = routeToTitle[location.pathname] || "Default Header";
    setCurrentTitle(newTitle);
  }, [location.pathname]);

  return <>{currentTitle}</>;
};

export default App;
