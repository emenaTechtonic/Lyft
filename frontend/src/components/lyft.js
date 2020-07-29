import React, { useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3001';

const Lyft = () => {
	const [appString, initAppString] = useState('');
	const [newAppString, initNewAppString] = useState('');

	const changeBody = async (e) => {
		if (e.key === 'Enter') {
			const res = await axios.post(
				`${baseUrl}/test`,
				{ string_to_cut: `${appString}` },
				{ headers: { 'content-type': 'application/json' } }
			);
			if (res.status === 200) initNewAppString(res.data.string_to_cut);
		} else {
			let b = e.target.value;
			initAppString(b);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<textarea
					onKeyDown={changeBody}
					onChange={changeBody}
					placeholder="Enter Body"
					value={appString}
				></textarea>
				<div>{newAppString}</div>
			</header>
		</div>
	);
};
export default Lyft;
