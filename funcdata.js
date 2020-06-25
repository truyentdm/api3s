//
function checkLocal(objURL){
		for (var i = 0; i < objURL.length; i++) {
			 if (objURL[i] == "us" || objURL[i] == "ca" || objURL[i] == "uk") {
				console.log("checkLocal>>>>>>>>>",true)
				return true;
			}
		}
		console.log("checkLocal>>>>>>>>>",false)
		return false;
	}
