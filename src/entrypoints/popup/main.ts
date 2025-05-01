// Handles click event for getting API-Key
document.getElementById('get-key').addEventListener('click', () => {
	browser.runtime.sendMessage({ action: 'getCookies' }, response => {
		// Getting the output area
		let output = document.getElementById('key-output');
		
		if (response.success) {
			// let decoded = atob(response.key);
			output = response.key;
		}
		else {
			output.textContent = "Failed to get key! Please try again.";
		}
		
		console.log(output);
		let auth_token = output[0];
		let csrf_token = output[1];
		let user_id = output[3];
		console.log(auth_token, csrf_token, user_id);
	});
});


// Handles copying the key using the button
document.getElementById('copy-key').addEventListener('click', () => {
	navigator.clipboard.writeText(document.getElementById('key-output').value);
})

function buildAcceptLanguageString() {
	const languages = navigator.languages;

	// Check if we have any languages
	if (!languages || languages.length === 0) {
		return "en-US,en;q=0.9"; // Default value if nothing is available
	}

	let q = 1;
	const decrement = 0.1;

	return languages.map(lang => {
		if (q < 1) {
			const result = `${lang};q=${q.toFixed(1)}`;
			q -= decrement;
			return result;
		}
		q -= decrement;
		return lang;
	}).join(',');
}

//
//
// scraper mode ############
//
//

let searchButton = document.getElementById('send');
let usernameInput = document.getElementById('username') as HTMLInputElement;
let startDateInput = document.getElementById('startDate') as HTMLInputElement;
let endDateInput = document.getElementById('endDate') as HTMLInputElement;
let keywordsInput = document.getElementById('keywords') as HTMLInputElement;

// Set default dates (e.g., last 30 days)
const today = new Date();
const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(today.getDate() - 30);

startDateInput.value = thirtyDaysAgo.toISOString().split('T')[0];
endDateInput.value = today.toISOString().split('T')[0];

searchButton.addEventListener('click', () => {    
    browser.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        browser.runtime.sendMessage({ 
            action: "insertString", 
            data: { 
                tab: tabs[0],
                dateRange: {
                    start: startDateInput.value,
                    end: endDateInput.value
                },
				inputs: {
					username: usernameInput.value,
					keywords: keywordsInput.value
				}
            }
        });
    });
});
  
