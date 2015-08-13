document.getElementById("submit").addEventListener("click", checkIsValid);

function checkIsValid() {
	var name = document.getElementById("name"),
		lastN = document.getElementById("lastN"),
		msg = document.getElementById("msg"),
		failMessage = alert("Please fill all fields"),
		testData =[name, lastN, msg],
		badValues = ["enter your name","enter your last name", ""];

		for(var i = 0; i < testData.length; i++){
			if(testData[i].value.toLowerCase() === badValues[i].toLowerCase()){
				testFailed(testData[i]);
				failMessage;
			}
			else {
				testSuccess(testData[i]);
			}
		}
}


function testFailed(fieldName) {
	fieldName.style.borderColor = "#cc0066"
	fieldName.style.backgroundColor = "#FEEDF5";
}

function testSuccess(fieldName) {
	fieldName.style.borderColor = "#999"
	fieldName.style.backgroundColor = "#fff";
}
