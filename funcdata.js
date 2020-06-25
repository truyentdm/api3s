//
function checkLocal(objURL){
	for (var i = 0; i < objURL.length; i++) {
		 if (objURL[i] == "US" || objURL[i] == "CA" || objURL[i] == "UK") {
			console.log("checkLocal>>>>>>>>>",true)
			return true;
		}
	}
	console.log("checkLocal>>>>>>>>>",false)
	return false;
}

function getLocal(objURL){
	if(checkLocal(objURL)){
		if (objURL[1] == "US") { 
			return "US";
		}else if(objURL[1] == "CA"){
			return "CA";
		}else if(objURL[1] == "UK"){
			return "UK";
		}else{
			return false;
		}
		
	}
	return false;
}

function getASIN(objURL){
	if(checkLocal(objURL)){
		return objURL[2];
	}
	return false;
}
function checkDataAMZ(dataAMZ,objURL){
	var gLocal = getLocal(objURL);
	var gAsin = getASIN(objURL);
	var existAS = typeof dataAMZ[gAsin] != "undefined" ? true : false;
	var existLocal =false;
	if(existAS){
		existLocal= typeof dataAMZ[gAsin][gLocal] != "undefined" ? true : false;
	}
	return existLocal;
}
function getLinkDataAMZ(dataAMZ,objURL){
	if(checkDataAMZ(dataAMZ,objURL)){
		var gLocal = getLocal(objURL);
		var gAsin = getASIN(objURL);
		var glink = dataAMZ[gAsin][gLocal];
		return glink;
	}
	return "";
}
