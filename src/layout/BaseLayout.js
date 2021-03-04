import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Country from "../components/Country/Country";
import Cards from "../components/Card/Card";
import Chart from "../components/Chart/Chart";
import { fetchData } from '../api'
import 'antd/dist/antd.css';

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
		// let selectedCountry = country.value
		const fetchedData = await fetchData(country);

		setData(fetchedData);
		setCountry(country);
	}

	console.log(country)
	console.log(data)
	
	return (
		<Layout className="layout-box">
			<Header>Covid19 Tracker</Header>
			<Cards data={data}/>
			<Country handleCountryChange={handleCountryChange}/>
			<Chart data={data} country={country}/>
		</Layout>
	)

}

export default BaseLayout;