import React, { useState } from "react";
import { Col, Layout, Row, Typography } from "antd";
import Country from "../components/Country/Country";
import Card from "../components/Card/Card";
import Chart from "../components/Chart/Chart";

const { Header, Sider, Content, Footer } = Layout;

const layout = () => {
  
  return (
    <Layout>
      <Header>Test</Header>
      <Card/>
      <Country/>
      <Chart/>
    </Layout>
  )

}

export default layout;