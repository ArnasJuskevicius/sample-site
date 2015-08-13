document.getElementById("submit").addEventListener("click", checkIsValid);

function checkIsValid() {
		getResult = new Array(12);
	var name = document.getElementById("name"),
		lastN = document.getElementById("lastN"),
		msg = document.getElementById("msg"),
		testData =[name, lastN, msg],
		badValues = ["enter your name","enter your last name", ""],
		check = 0;


		for(var i = 0; i < testData.length; i++){
			if(testData[i].value.toLowerCase() === badValues[i].toLowerCase()){
				testFailed(testData[i]);
			}
			else {
				testSuccess(testData[i]);
			}
		}

		for(var i = 0; i < getResult.length; i++){
			if(getResult[i] === "successful"){
				check++;
			}
		}

		if(check === 3) {
			alert("Message successfly sent");
			getResult = [];
		}
		else {
			getResult = [];
		}
}


function testFailed(fieldName) {
	fieldName.style.borderColor = "#cc0066"
	fieldName.style.backgroundColor = "#FEEDF5";
	getResult.push("failed")
}

function testSuccess(fieldName) {
	fieldName.style.borderColor = "#999"
	fieldName.style.backgroundColor = "#fff";
	getResult.push("successful")
}
