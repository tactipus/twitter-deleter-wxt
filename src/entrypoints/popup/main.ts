let searchButton = document.getElementById('send');

let usernameInput = document.getElementById('username') as HTMLInputElement;
let startDateInput = document.getElementById('startDate') as HTMLInputElement;
let endDateInput = document.getElementById('endDate') as HTMLInputElement;
let keywordsInput = document.getElementById('keywords') as HTMLInputElement;

let auth_token = "";
let csrf_token = "";
let user_id = "";

// Set default dates (e.g., last 30 days)
const today = new Date();
const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(today.getDate() - 30);

startDateInput.value = thirtyDaysAgo.toISOString().split('T')[0];
endDateInput.value = today.toISOString().split('T')[0];

/**
 * figure out why the addEventListener needs to be activated twice to grab cookie
 * values figure out why
 */

// function receivedCookies(message)
// {
// 	let cookies = "";
// 	console.log(cookies);
		
// 	if (message.success) {
// 		// let decoded = atob(response.key);
// 		cookies = message.key;
// 	}
// 	else {
// 		cookies = "Failed to get key! Please try again.";
// 	}
		
// 	auth_token = cookies[0];
// 	csrf_token = cookies[1];
// 	user_id = cookies[3];
// }

searchButton.addEventListener('click', () => {    	
	// console.log("zero");
	// browser.runtime.sendMessage({ action: 'getCookies' });

	// browser.runtime.onMessage.addListener(receivedCookies);

	// console.log(auth_token + " three");

	browser.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		browser.runtime.sendMessage({ 
			action: "deleteTweets", 
			data: { 
				tab: tabs[0],
				dateRange: {
					start: startDateInput.value,
					end: endDateInput.value
				},
				inputs: {
					username: usernameInput.value,
					keywords: keywordsInput.value
				},
				cookies: {
					auth: auth_token,
					csrf: csrf_token,
					user_id: user_id
				}
			}
		});
	});
});

