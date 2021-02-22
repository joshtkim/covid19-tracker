import React, { useState, useEffect } from 'react';
import {fetchCountries} from '../../api';

import { Select } from 'antd';

const { Option } = Select;


const Country = ({ handleCountryChange }) => {

	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
			const fetchAPI = async () => {
					setFetchedCountries(await fetchCountries());
			}
			fetchAPI();
	}, [setFetchedCountries]);

	return (
		<div className="country">
			<Select
				labelInValue
				defaultValue={{ value: '' }}
				style={{ width: 120 }}
				onChange={(e) => handleCountryChange(e.target.value)}
			>
				<Option value="global">Global</Option>
				{fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
			</Select>
		</div>

	)

}

export default Country;