import React from "react";
import { ICandidate } from "../Constants/types";
import { control } from "../Helpers/helper";

type Props = {
	candidate: ICandidate;
};

const TableRow = ({ candidate }: Props) => {
	return (
		<tr className={candidate.isBackgroundColorRed ? "redBackground" : ""}>
			<td>{candidate.name}</td>
			<td>{candidate.mailReceivedDate}</td>
			{candidate.solutionSentDate && <td>{candidate.solutionSentDate}</td>}
		</tr>
	);
};

export default TableRow;
