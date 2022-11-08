import React, { useCallback, useEffect, useState } from "react";
import Grid from "./Components/Grid";
import { DummyData } from "./Constants/data";
import { control } from "./Helpers/helper";
import "./style.css";

export default function App() {
	const [limit, setLimit] = useState<number>(5);
	const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLimit(Number(e.currentTarget.value));
	};

	useEffect(() => {
		control(new Date(), limit);
	}, [limit, document.getElementsByTagName("tr").length]);

	return (
		<div>
			<h1>DGPays Case Study </h1>
			<div className='input'>
				<label>Enter Limit</label>
				<input type={"number"} value={limit} placeholder={`Enter limit (${limit})`} onChange={handleLimitChange} />
				<div className='error'>
					{limit < 0 && <span>Limit shouldn't be less than 0</span>}
					{limit > 30 && <span>Limit shouldn't be more than 30</span>}
				</div>
			</div>
			<Grid data={DummyData} />
		</div>
	);
}
