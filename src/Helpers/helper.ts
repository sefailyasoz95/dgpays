export function control(today: Date, limit: number) {
	let elements = document.getElementsByTagName("tr");
	for (let i = 0; i < elements.length; i++) {
		let mailReceivedDate = new Date(elements[i].children[1].textContent!);
		if (elements[i].children.length > 2) {
			let solutionSentDate = new Date(elements[i].children[2]?.textContent!);
			if (
				solutionSentDate.getMonth() > mailReceivedDate.getMonth() ||
				solutionSentDate.getFullYear() > mailReceivedDate.getFullYear()
			) {
				elements[i].className = "redBackground";
			} else {
				if (solutionSentDate.getDate() - mailReceivedDate.getDate() > limit) elements[i].className = "redBackground";
				else elements[i].className = "";
			}
		} else {
			if (today.getDate() - mailReceivedDate.getDate() > limit) elements[i].className = "redBackground";
		}
	}
}
