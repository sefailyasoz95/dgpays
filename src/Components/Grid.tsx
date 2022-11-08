import React, { useState } from "react";
import { ICandidate } from "../Constants/types";
import { control } from "../Helpers/helper";
import TableRow from "./TableRow";

type Props = {
	data: ICandidate[];
};

const Grid = ({ data }: Props) => {
	return (
		<table>
			<tbody>
				{data.map((candidate: ICandidate, index: number) => (
					<TableRow candidate={candidate} key={index} />
				))}
			</tbody>
		</table>
	);
};

export default Grid;
