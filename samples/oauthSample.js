/*jshint esversion: 9 */

const ForgeSDK = require('./../src/index');

// TODO - insert your CLIENT_ID and CLIENT_SECRET
const FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || 'your forge client id';
const FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || 'your forge client secret';

// Initialize the 2-legged oauth2 client
const oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET,
	['data:write', 'data:read', 'bucket:read', 'bucket:update', 'bucket:create'], true);

// oAuth2TwoLegged.authenticate()
// 	.then((credentials) => {
// 		console.log("**** Got Credentials", credentials);
// 	})
// 	.catch (err => {
// 		console.error('\x1b[31m Error:', err, '\x1b[0m');
// 	});

(async () => {
	try {
		let credentials = await oAuth2TwoLegged.authenticate();
		console.log("**** Got Credentials", credentials);
	} catch (ex) {
		console.error('\x1b[31m Error:', ex, '\x1b[0m');
	}
})();