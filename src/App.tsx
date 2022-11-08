import React, { useCallback, useEffect, useState } from "react";
import Grid from "./Components/Grid";
import { DummyData } from "./Constants/data";
import { control } from "./Helpers/helper";
import "./style.css";

export default function App() {
	const [limit, setLimit] = useState<number>(5);
	const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		Number(e.currentTarget.value) < 1 ? setLimit(1) : setLimit(Number(e.currentTarget.value));
	};

	useEffect(() => {
		control(new Date(), limit);
	}, [limit, document.getElementsByTagName("tr").length]);

	return (
		<div>
			<h1>DGPays Case Study </h1>
			<input type={"number"} placeholder={`Enter limit (${limit})`} onChange={handleLimitChange} min={1} />
			<Grid data={DummyData} />
		</div>
	);
}
