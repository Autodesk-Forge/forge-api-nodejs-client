//
// Copyright (c) 2019 Autodesk, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/*jshint esversion: 9 */

const ForgeSDK = require('./../src/index');

// TODO - insert your CLIENT_ID and CLIENT_SECRET
const APS_CLIENT_ID = process.env.APS_CLIENT_ID || 'your forge client id';
const APS_CLIENT_SECRET = process.env.APS_CLIENT_SECRET || 'your forge client secret';

// Initialize the 2-legged oauth2 client
const oAuth2TwoLeggedV2 = new ForgeSDK.AuthClientTwoLeggedV2(APS_CLIENT_ID, APS_CLIENT_SECRET,
	['data:read'], true);

// oAuth2TwoLegged.authenticate()
// 	.then((credentials) => {
// 		console.log("**** Got Credentials", credentials);
// 	})
// 	.catch (err => {
// 		console.error('\x1b[31m Error:', err, '\x1b[0m');
// 	});

(async () => {
	try {
		let credentials = await oAuth2TwoLeggedV2.authenticate();
		console.log("**** Got Credentials", JSON.stringify(credentials, null, 4));

		const result = await oAuth2TwoLeggedV2.verifyToken(credentials.access_token);
		console.log("**** Credentials verified", JSON.stringify(result, null, 4));
	} catch (ex) {
		console.error('\x1b[31m Error:', ex, '\x1b[0m');
	}
})();