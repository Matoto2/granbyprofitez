export async function fileListToBase64(fileList) {
	// create function which return resolved promise
	// with data:base64 string
	async function getBase64(file) {
		const reader = new FileReader()
		return new Promise(resolve => {
			reader.onload = ev => {
				resolve(ev.target.result)
			}
			reader.readAsDataURL(file)
		})
	}
	// here will be array of promisified functions
	const promises = []

	// loop through fileList with for loop
	for (let i = 0; i < fileList.length; i++) {
		promises.push({
			base64: await getBase64(fileList[i]),
			info: {
				name: fileList[i].name,
				size: fileList[i].size
			}
		})
	}

	// array with base64 strings
	return await Promise.all(promises)
}
