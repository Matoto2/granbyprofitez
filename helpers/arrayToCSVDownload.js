export function arrayToCSVDownload(arr, filename){

	let csv = '';
	let header = '"'+Object.keys(arr[0]).join('","')+'"'
	let values = arr.map(a => '"'+Object.values(a).join('","')+'"').join('\n');
	csv += header + '\n' + values;

	let link = document.createElement("a");
	link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv));
	link.download = filename + ".csv";
	link.click();
}
