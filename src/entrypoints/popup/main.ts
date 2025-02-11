// var user_id = getCookie("twid").substring(4);
console.log("1");
import "./style.css"
import { Rettiwt } from 'rettiwt-api';

const domain = 'x.com';
const rettiwt = new Rettiwt();
const getKeyButton = document.querySelector("#get-key");


// const username = document.querySelector("#username");
// const startDate = document.querySelector("#startDate");
// const endDate = document.querySelector("#endDate");
// const keywords = document.querySelector("#keywords");
// const submit = document.querySelector("#send");


// import { ContentScriptContext } from "wxt/client";

// 
// ============ actual app logic =============
//

// Fetching the details of the user whose username is <username>

rettiwt.user.details('la_ZorraNegra')
.then(details => {
    console.log(details);
})
.catch(error => {
    console.log("Oops!");
});

// export default defineContentScript({
//   // Set "registration" to runtime so this file isn't listed in manifest
//   registration: "runtime",
//   // Use an empty array for matches to prevent any host_permissions be added
//   //  when using `registration: "runtime"`.
//   matches: [],
//   // Put the CSS in the shadow root
//   cssInjectionMode: "ui",

//   async main(ctx) {
//     console.log("Content script executed!");

//     const ui = await createUi(ctx);
//     ui.mount();

//     // Optionally, return a value to the background
//     return "Hello world!";
//   },
// });

// function createUi(ctx: ContentScriptContext) {
//   return createShadowRootUi(ctx, {
//     name: "active-tab-ui",
//     position: "inline",
//     append: "before",
//     onMount(container) {
//       const app = document.createElement("p");
//       app.textContent = "Hello active tab!";
//       container.append(app);
//     },
//   });
// }

// username.addEventListener("keyup", function (e) {
// 	if (e.key === 'Enter') {
// 		e.preventDefault();
// 		// Check if Enter key is pressed
// 		document.getElementById("send").click();
// 	}
// });

// startDate.addEventListener("keyup", function (e) {
// 	if (e.key === 'Enter') {
// 		e.preventDefault();
// 		// Check if Enter key is pressed
// 		document.getElementById("send").click();
// 	}
// });

// endDate.addEventListener("keyup", function (e) {
// 	if (e.key === 'Enter') {
// 		e.preventDefault();
// 		// Check if Enter key is pressed
// 		document.getElementById("send").click();
// 	}
// });

// keywords.addEventListener("keyup", function (e) {
// 	if (e.key === 'Enter') {
// 		e.preventDefault();
// 		// Check if Enter key is pressed
// 		document.getElementById("send").click();
// 	}
// });

// submit.addEventListener("click", () => {
// 	console.log(username.value);
// 	console.log(startDate.value);
// 	console.log(endDate.value);
// 	console.log(keywords.value);
// })

// async function getCookies() {
//     // Getting the cookies for the given domain
//     let cookies = await chrome.cookies.getAll({ domain: domain });
          
//     // Filter out required cookies
//     cookies = cookies.filter(item => item.name == 'auth_token' || item.name == 'ct0' || item.name == 'kdt' || item.name == 'twid');
  
//     /** Stores the key */
//     let key = '';
  
//     // If all required cookies are present
//     if (cookies.length == 4) {
//         // Appending all cookies to a cookie string
//         for (const {name, value} of cookies) {
//             key += `${name}=${value};`;
//         }
  
//         // Encoding the cookies to base64 to get key
//         key = btoa(key);
//     }
  
//     return key;
// }

// // Listener for messages from extension page (popup)
// getKeyButton.addEventListener("click", () => {
// 	key = getCookies();
// 	console.log(key);
// }); 

// rettiwt.user.details('<username>');



// function buildAcceptLanguageString() {
// 	const languages = navigator.languages;

// 	// Check if we have any languages
// 	if (!languages || languages.length === 0) {
// 		return "en-US,en;q=0.9"; // Default value if nothing is available
// 	}

// 	let q = 1;
// 	const decrement = 0.1;

// 	return languages.map(lang => {
// 		if (q < 1) {
// 			const result = `${lang};q=${q.toFixed(1)}`;
// 			q -= decrement;
// 			return result;
// 		}
// 		q -= decrement;
// 		return lang;
// 	}).join(',');
// }

/**
* Gets cookies for x.com and encoding them to base64.
*/


// function getCookie(name) {
// 	const value = `; ${document.cookie}`;
// 	const parts = value.split(`; ${name}=`);
// 	if (parts.length === 2) return parts.pop().split(';').shift();
// }

// async function sleep(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function log_tweets(entries) {
// 	for (let item of entries) {
// 		if (item["entryId"].startsWith("profile-conversation") || item["entryId"].startsWith("tweet-")) {
// 			findTweetIds(item)
// 		}
// 		else if (item["entryId"].startsWith("cursor-bottom") && entries.length > 2) {
// 			let cursor_bottom = item["content"]["value"];

// 			return cursor_bottom;
// 		}
// 	}
// 	return "finished"
// }

// function check_keywords(text) {
// 	if (delete_options["match_any_keywords"].length == 0) {
// 		return true
// 	}
// 	for (let word of delete_options["match_any_keywords"]) {
// 		if (text.includes(word))
// 			return true
// 	}
// 	return false
// }

// function check_date(tweet) {
// 	if (tweet['legacy'].hasOwnProperty('created_at')) {
// 		tweet_date = new Date(tweet['legacy']["created_at"])
// 		tweet_date.setHours(0, 0, 0, 0);
// 		if (tweet_date > delete_options["after_date"] && tweet_date < delete_options["before_date"]) {
// 			return true
// 		}
// 		else if (tweet_date < delete_options["after_date"]) {
// 			stop_signal = true
// 		}
// 		return false
// 	}
// 	return true
// }

// function check_date_archive(created_at) {
// 	tweet_date = new Date(created_at)
// 	tweet_date.setHours(0, 0, 0, 0);
// 	if (tweet_date > delete_options["after_date"] && tweet_date < delete_options["before_date"]) {
// 		return true
// 	}
// 	else if (tweet_date < delete_options["after_date"]) {
// 		stop_signal = true
// 	}
// 	return false
// }

// function check_filter(tweet) {
// 	if (tweet['legacy'].hasOwnProperty('id_str')
// 		&& ( delete_options["tweets_to_ignore"].includes(tweet['legacy']["id_str"]) || delete_options["tweets_to_ignore"].includes( parseInt(tweet['legacy']["id_str"]) ) )) {
// 		return false
// 	}
// 	if (delete_options["delete_message_with_url_only"] == true)
// 	{
// 		if (tweet['legacy'].hasOwnProperty('entities') && tweet['legacy']["entities"].hasOwnProperty('urls') && tweet['legacy']["entities"]["urls"].length > 0
// 			&& check_keywords(tweet['legacy']['full_text']) && check_date(tweet)) {
// 			return true
// 		}
// 		return false
// 	}
// 	if (check_keywords(tweet['legacy']['full_text']) && check_date(tweet))
// 		return true
// 	return false
// }

// function check_filter_archive(tweet_obj) {
// 	let tweet_id = tweet_obj["id"]
// 	let tweet_str = tweet_obj["text"]
// 	let tweet_date = tweet_obj["date"]
// 	if ((delete_options["tweets_to_ignore"].includes(tweet_id) || delete_options["tweets_to_ignore"].includes( parseInt(tweet_id) ) )) {
// 		return false
// 	}
// 	if (check_keywords(tweet_str) && check_date_archive(tweet_date))
// 		return true
// 	return false
// }

// function check_tweet_owner(obj, uid) {
// 	if (obj.hasOwnProperty('legacy') && obj['legacy'].hasOwnProperty('retweeted') && obj['legacy']['retweeted'] === true && delete_options["unretweet"] == false)
// 		return false
// 	if (obj.hasOwnProperty('user_id_str') && obj['user_id_str'] === uid)
// 		return true;
// 	else if (obj.hasOwnProperty('legacy') && obj['legacy'].hasOwnProperty('user_id_str') && obj['legacy']['user_id_str'] === uid)
// 		return true;
// 	return false
// }

// function tweetFound(obj) {
// 	console.log(`found ${obj['legacy']['full_text']}`)
// }

// function parseTweetsFromArchive(data) {
//     try {
//         const filteredIds = [];

//         data.forEach(item => {
//             if (item.tweet && item.tweet.id_str) {
//                 const isInReplyToExcludedUser = item.tweet.in_reply_to_user_id_str === user_id;
//                 const startsWithRT = item.tweet.full_text.startsWith('RT ');
				
// 				let tweet_obj = {}
// 				tweet_obj["id"] = item.tweet.id_str
// 				tweet_obj["text"] = item.tweet.full_text
// 				tweet_obj["date"] = item.tweet.created_at
//                 if (!isInReplyToExcludedUser
// 					&& ((delete_options["unretweet"] == true && startsWithRT == true) || (delete_options["unretweet"] == false && startsWithRT == false))
// 					&& check_filter_archive(tweet_obj)) {
// 					;
// 				}
// 				else {
// 					return;
// 				}
// 				console.log("DELETING:",item.tweet.full_text)
// 				filteredIds.push(item.tweet.id_str);
//             }
//         });

//         return filteredIds;
//     } catch (error) {
//         console.error("Error parsing JSON:", error);
//         return [];
//     }
// }

// function findTweetIds(obj) {
// 	function recurse(currentObj) {
// 		if (typeof currentObj !== 'object' || currentObj === null
// 		|| (delete_options["do_not_remove_pinned_tweet"] == true && currentObj['__type'] == "TimelinePinEntry")) {
// 			return;
// 		}

// 		if (currentObj['__typename'] === 'TweetWithVisibilityResults' && currentObj.hasOwnProperty('tweet')
// 			&& check_tweet_owner(currentObj['tweet'], user_id) && check_filter(currentObj['tweet'])) {
// 			tweets_to_delete.push(currentObj['tweet']['id_str'] || currentObj['tweet']['legacy']['id_str']);
// 			tweetFound(currentObj['tweet'])
// 		}

// 		else if (currentObj.hasOwnProperty('__typename') && currentObj['__typename'] === 'Tweet'
// 			&& check_tweet_owner(currentObj, user_id) && check_filter(currentObj)) {
// 			tweets_to_delete.push(currentObj['id_str'] || currentObj['legacy']['id_str']);
// 			tweetFound(currentObj)
// 		}

// 		for (let key in currentObj) {
// 			if (currentObj.hasOwnProperty(key)) {
// 				recurse(currentObj[key]);
// 			}
// 		}
// 	}

// 	recurse(obj);
// }

// async function delete_tweets(id_list) {
// 	var delete_tid = "LuSa1GYxAMxWEugf+FtQ/wjCAUkipMAU3jpjkil3ujj7oq6munDCtNaMaFmZ8bcm7CaNvi4GIXj32jp7q32nZU8zc5CyLw"
// 	var id_list_size = id_list.length
// 	var retry = 0

// 	for (let i = 0; i < id_list_size; ++i) {
// 		const response = await fetch("https://x.com/i/api/graphql/VaenaVgh5q5ih7kvyVjgtg/DeleteTweet", {
// 			"headers": {
// 				"accept": "*/*",
// 				"accept-language": buildAcceptLanguageString(),
// 				"authorization": authorization,
// 				"content-type": "application/json",
// 				"sec-ch-ua": ua,
// 				"sec-ch-ua-mobile": "?0",
// 				"sec-ch-ua-platform": "\"Windows\"",
// 				"sec-fetch-dest": "empty",
// 				"sec-fetch-mode": "cors",
// 				"sec-fetch-site": "same-origin",
// 				"x-client-transaction-id": delete_tid,
// 				"x-client-uuid": client_uuid,
// 				"x-csrf-token": csrf_token,
// 				"x-twitter-active-user": "yes",
// 				"x-twitter-auth-type": "OAuth2Session",
// 				"x-twitter-client-language": language_code
// 			},
// 			"referrer": `https://x.com/${username}/with_replies`,
// 			"referrerPolicy": "strict-origin-when-cross-origin",
// 			"body": `{\"variables\":{\"tweet_id\":\"${id_list[i]}\",\"dark_request\":false},\"queryId\":\"VaenaVgh5q5ih7kvyVjgtg\"}`,
// 			"method": "POST",
// 			"mode": "cors",
// 			"credentials": "include"
// 		});
		
// 		if (!response.ok) {
// 			if (response.status === 429) {
// 				console.log("Rate limit reached. Waiting 1 minute")
// 				await sleep(1000 * 60);
// 				i -= 1;
// 				continue
// 			}
// 			if (retry == 8) {
// 				throw new Error("Max retries reached")
// 			}
// 			console.log(response.text())
// 			console.log(`(delete_tweets) Network response was not ok, retrying in ${10 * (1 + retry)} seconds`);
// 			i -= 1;
// 			await sleep(10000 * (1 + retry));
// 			continue
// 		}
// 		retry = 0
// 		console.log(`${i}/${id_list_size}`)
// 		await sleep(100);
// 	}
// }

// var next = null
// var entries = undefined

// // Handles click event for getting API-Key
// document.getElementById('get-key').addEventListener('click', () => {
//     chrome.runtime.sendMessage({ action: 'getCookies' }, response => {
//       	// Getting the output area
// 		const output = document.getElementById('key-output');
		
// 		if (response.success) {
//         	output.textContent = response.key;
//       	}
// 		else {
// 			output.textContent = "Failed to get key! Please try again.";
// 		}
//     });
// });

// // Handles copying the key using the button
// document.getElementById('copy-key').addEventListener('click', () => {
// 	navigator.clipboard.writeText(document.getElementById('key-output').value);
// })

// chrome.runtime.onInstalled.addListener(() => {
//     console.log('X Auth Helper installed!');
// });

// rettiwt.tweet.search({
//     fromUsers: ['<username>'],
//     words: ['<word1>', '<word2>']
// })
// .then(data => {
//     ...
// })
// .catch(err => {
//     ...
// });

// if (delete_options["from_archive"] == true) {
// 	console.log("Waiting for user to load his Twitter archive")

//     // Create modal elements
//     const modal = document.createElement('div');
//     modal.id = 'myModal';
//     modal.className = 'modal';

//     const modalContent = document.createElement('div');
//     modalContent.className = 'modal-content';

//     const closeSpan = document.createElement('span');
//     closeSpan.className = 'close';
//     closeSpan.innerHTML = '&times;';

//     const header = document.createElement('h2');
//     header.innerText = 'Drop Your File Here';

//     const dropArea = document.createElement('div');
//     dropArea.id = 'drop-area';
//     dropArea.className = 'drop-area';
//     dropArea.innerHTML = '<p>Drop your tweets.js from your Twitter Archive here</p>';

//     // Append elements
//     modalContent.appendChild(closeSpan);
//     modalContent.appendChild(header);
//     modalContent.appendChild(dropArea);
//     modal.appendChild(modalContent);
//     document.body.appendChild(modal);

//     // Add CSS styles
//     const styles = `
//         .modal {
//             display: none;
//             position: fixed;
//             z-index: 1;
//             left: 0;
//             top: 0;
//             width: 100%;
//             height: 100%;
//             overflow: auto;
//             background-color: rgba(0,0,0,0.4);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
//         .modal-content {
//             background-color: #fff;
//             margin: auto;
//             padding: 20px;
//             border-radius: 5px;
//             box-shadow: 0 4px 8px rgba(0,0,0,0.2);
//             width: 400px;
//             text-align: center;
//         }
//         .close {
//             color: #aaa;
//             position: absolute;
//             top: 10px;
//             right: 20px;
//             font-size: 24px;
//             font-weight: bold;
//             cursor: pointer;
//         }
//         .close:hover {
//             color: black;
//         }
//         .drop-area {
//             border: 2px dashed #007bff;
//             border-radius: 5px;
//             padding: 60px;
//             cursor: pointer;
//             transition: .5s ease-in-out;
//         }
//         .drop-area:hover {
//             border-color: #0056b3;
// 			background-color: #dff3fb;
// 			transition: .5s ease-in-out;
//         }
// 		.drop-area.active {
// 			background-color: #f3f4f6; /* Lighter background */
// 			border-color: #4caf50; /* Green border */
// 			color: #4caf50; /* Green text */
// 		}
		
// 		.drop-area.active p {
// 			font-weight: bold;
// 			color: #4caf50;
// 		}
//         h2 {
//             color: #333;
//             margin-bottom: 20px;
//         }
//         p {
//             margin: 0;
//             color: #666;
//         }
// 		confirm-button {
// 			margin-top: 30px;
// 			background-color: rgb(0, 116, 212);
// 			border: 2px solid rgb(0, 116, 212);
// 			border-radius: 3px;
// 		}
//     `;

//     const styleSheet = document.createElement("style");
//     styleSheet.type = "text/css";
//     styleSheet.innerText = styles;
//     document.head.appendChild(styleSheet);

//     // Display modal
//     modal.style.display = 'flex';

//     // Close modal on click
//     closeSpan.onclick = function() {
//         modal.style.display = 'none';
//     };
//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     };
// 	const confirmButton = document.createElement('button');
// 	confirmButton.innerText = 'Confirm';
// 	confirmButton.className = 'confirm-button';
// 	confirmButton.style.marginTop = "5px"

// 	// Append confirm button to modal content
// 	modalContent.appendChild(confirmButton);

// 	// Confirm button event listener
// 	confirmButton.addEventListener('click', () => {
// 		if (twitter_archive_content) {
// 			console.log("Confirmation received. File processed.");
// 			twitter_archive_loading_confirmed = true
// 			modal.style.display = 'none';
// 			// Further processing can be done here
// 		} else {
// 			console.error("No file loaded. Please load a file before confirming.");
// 		}
// 	});
//     // Drag and Drop functionality
//     dropArea.addEventListener('dragover', (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//         event.dataTransfer.dropEffect = 'copy';
//         dropArea.style.borderColor = '#0056b3';
//     });

//     dropArea.addEventListener('dragleave', (event) => {
//         dropArea.style.borderColor = '#007bff';
//     });

//     dropArea.addEventListener('drop', (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//         dropArea.style.borderColor = '#007bff';
//         const files = event.dataTransfer.files;

//         // Process file here
//         console.log(files[0]);
//     });

//     // Click to upload functionality
//     dropArea.onclick = function() {
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.onchange = e => {
//             // Process file here
//             console.log(e.target.files[0]);
//         };
//         fileInput.click();
//     };
// 	function readFile(file) {
// 		const reader = new FileReader();
// 		reader.onload = function(event) {
// 			const content = event.target.result;
	
// 			// Split by '=' and remove the first part
// 			const parts = content.split('=');
// 			parts.shift(); // Remove the first element
// 			const jsonPart = parts.join('=').trim(); // Rejoin the rest and trim
	
// 			try {
// 				const data = JSON.parse(jsonPart);
// 				twitter_archive_content = data;
// 				console.log("JSON data loaded into global variable.");
// 			} catch (e) {
// 				console.error("Error parsing JSON:", e);
// 			}
// 		};
// 		reader.onerror = function(error) {
// 			console.error("Error reading file:", error);
// 		};
// 		reader.readAsText(file); // Read the file as text
// 	}

//     // Modify the drop event
//     dropArea.addEventListener('drop', (event) => {
//         // ... [existing event handler code] ...
//         const file = event.dataTransfer.files[0];
//         readFile(file);
//     });

//     // Modify the file input change event
//     dropArea.onclick = function() {
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.onchange = e => {
//             const file = e.target.files[0];
//             readFile(file);
//         };
//         fileInput.click();
//     };
// 	dropArea.addEventListener('dragover', (event) => {
// 		event.stopPropagation();
// 		event.preventDefault();
// 		event.dataTransfer.dropEffect = 'copy';
// 		dropArea.classList.add('active'); // Add 'active' class
// 	});
	
// 	dropArea.addEventListener('dragleave', (event) => {
// 		dropArea.classList.remove('active'); // Remove 'active' class
// 	});
	
// 	dropArea.addEventListener('drop', (event) => {
// 		event.stopPropagation();
// 		event.preventDefault();
// 		dropArea.classList.remove('active'); // Remove 'active' class
// 		// Rest of your drop event code...
// 	});
// }

// if (delete_options["from_archive"] == true) {
// 	while (twitter_archive_loading_confirmed == false) {
// 		await sleep(1000)
// 	}
// 	tweets_to_delete = parseTweetsFromArchive(twitter_archive_content)
// 	console.log(tweets_to_delete)
// 	await delete_tweets(tweets_to_delete)
// }

// else if (delete_options["delete_specific_ids_only"].length == 1 && delete_options["delete_specific_ids_only"][0].length == 0) {
// 	while (next != "finished" && stop_signal != true) {
// 		entries = await fetch_tweets(next);
// 		next = await log_tweets(entries);
// 		await delete_tweets(tweets_to_delete)
// 		tweets_to_delete = []
// 		await sleep(3000);
// 	}
// }

// else {
// 	await delete_tweets(delete_options["delete_specific_ids_only"]);
// }

// console.log("DELETION COMPLETE (if error happened before this may be not true)")