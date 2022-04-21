document.querySelector('input').onkeyup=ev=>
  ev.target.value=ev.target.value
    .replace(/ /g,'')
    .replace(/^(.{3})/,"$1 ");

const form = document.getElementById('checkPostCode')

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	let postalCode = form.elements['postCode'];
	let postCode = postalCode.value
	
	const resultText = document.getElementById("result");
	
	const GHpostCodes = ["GH1 1AA", "GH1 7JA", "GH1 5JK", "GH1 1QW", "GH1 1AS", "GH2 7YT", "GH2 9HP", "GH2 7GA", "GH4 2HK", "GH4 2YG", "GH4 2UH", "GH5 1AC", "GH5 7YT", "GH5 1AE", "GH5 1QC", "GH6 1AA", "GH6 1AB", "GH6 1AC", "GH6 1AD", "GH6 1AE", "GH6 1AF", "GH6 1AG", "GH6 1AH", "GH7 2AA", "GH7 2AB", "GH7 2AC", "GH7 2AD", "GH7 2AE", "GH7 2AF", "GH7 2AG"];
	
	const SNpostCodes = ["SN1 1AA", "SN1 1AB", "SN1 1AC", "SN1 2AA", "SN1 2AB", "SN1 2AC", "SN1 2AD"];
	
	if(GHpostCodes.indexOf(postCode) > -1) {
		resultText.innerHTML = "Grass City Council";
	} else if(SNpostCodes.indexOf(postCode) > -1) {
		resultText.innerHTML = "Sandfordshire County Council";
	} else {
		resultText.innerHTML = "Invalid Postcode!"
	}
})