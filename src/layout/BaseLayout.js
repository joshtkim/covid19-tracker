import React, { useState, useEffect } from "react";
import { Col, Layout, Row, Typography } from "antd";
import Country from "../components/Country/Country";
import Card from "../components/Card/Card";
import Chart from "../components/Chart/Chart";
import { fetchData } from '../api'

const { Header, Content, Footer } = Layout;

const BaseLayout = () => {

	let [data, setData] = useState({});
	let [country, setCountry] = useState('');
	
	useEffect(() => {
		const fetchMyAPI = async () => {
			const fetchedData = await fetchData();

			setData(fetchedData);
		}

		fetchMyAPI();
	}, []);

	let handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		setData(fetchedData);
		setCountry(country);
	}
	
	return (
		<Layout className="layout-box">
			<Header>Test</Header>
			<Card data={data}/>
			<Country handleCountryChange={handleCountryChange}/>
			<Chart data={data} country={country}/>
		</Layout>
	)

}

export default BaseLayout;