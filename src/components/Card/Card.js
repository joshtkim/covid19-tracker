import React from 'react';
import { Card, Typography } from 'antd';
import CountUp from 'react-countup';


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
	if(!confirmed) {
		return "Loading..."
	}

	const { Text, Title } = Typography;


	return (
		<div className="data-card-wrapper">
			<Card>
				<Title level={3} type="warning">Infected</Title>
				<Text type="warning">
					<CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
				</Text>
				<Text type="warning"> Number of active cases of Covid19</Text>
			</Card>
			<Card>
				<Title level={3} type="success">Recovered</Title>
				<Text type="success">
					<CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
				</Text>
				<Text type="success"> Number of recovered cases of Covid19</Text>
			</Card>
			<Card>
				<Title level={3} type="danger">Deaths</Title>
				<Text type="danger">
					<CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
				</Text>
				<Text type="danger"> Number of deaths of Covid19</Text>
			</Card>
		</div>
	)
}

export default Cards;