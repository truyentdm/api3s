//Function
var shortLink = "https://www.besttips3s.com/";
function checkLocal(objURL){
	for (var i = 0; i < objURL.length; i++) {
		 if (objURL[i] == "US" || objURL[i] == "CA" || objURL[i] == "UK") {
			return true;
		}
	}
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

function checkASIN(asin,data){
  var existAS = typeof data[asin] != "undefined" ? true : false;
  return existAS;
}
function createLink(asin,local){
 var asinShort = asin.toLowerCase();
 var localShort = local.toLowerCase();
 return shortLink+localShort+"/"+asinShort;
}
function myCheckAsin(fn,dataAMZCK){
  var asin = fn.txtAsin.value;
      asin = asin.toUpperCase();
      asin = asin.trim();
  document.getElementById("lblResult").innerHTML = ""
  if(checkASIN(asin,dataAMZCK)){
     document.getElementById("lblResult").innerHTML = "ASIN: " + asin + "<br/>US: " + dataAMZCK[asin]["US"] + "<br/>CA: " + dataAMZCK[asin]["CA"] + "<br/>UK: " + dataAMZCK[asin]["UK"]+"<hr/>US Short Link: "+createLink(asin,"us")+"<br/>CA Short Link: "+createLink(asin,"ca")+"<br/>UK Short Link: "+createLink(asin,"uk");
  }

  return true;
}
  function myToolTxt(fn,upWord){
     var lblText = fn.txtAsin.value;
     document.getElementById("lblResult").innerHTML = ""
     if(upWord){
       document.getElementById("lblResult").innerHTML = lblText.toUpperCase();
     }else{
       document.getElementById("lblResult").innerHTML = lblText.toLowerCase() + "<hr/>" + shortLink +"us/"+lblText.toLowerCase();
     }
  }
  
  function myLinkShort(fn){
    document.getElementById("lblResult").innerHTML = ""
    var lblText = fn.txtAsin.value;
        lblText = lblText.trim();
    var txtAsin = "";
    var isTrue = false;
    if(lblText!=""){
        for (var i in dataAMZ){
            if(dataAMZ[i]["US"]==lblText||dataAMZ[i]["CA"]==lblText||dataAMZ[i]["UK"]==lblText){
              txtAsin = i;
              isTrue = true;
            }
        }
    }
    document.getElementById("lblResult").innerHTML = isTrue ? "OK : "+ txtAsin + " - " + shortLink +"us/"+ txtAsin.toLowerCase() : "NOT"
        
  }
function compareReferrer(objRef){
	var objExt = ["youtube"];
	for(var i=0;i < objRef.length; i++){
		for(var j=0;j < objExt.length; j++){
			if(objExt[j] == objRef[i]){
				return true;
			}
		}
	}
	return false;
}
function htmlRedirect404(url){
	var htmlJS = ""
	htmlJS += "<div class=\"widget Blog\">";
	htmlJS += "<div class=\"errorWrap\">";
	htmlJS += "<h4>You will be redirected to the purchase page of Amazon.</h4>";
	htmlJS += "<a class=\"homepage\" href=\"/\">Home</a>";
	htmlJS += "</div>";
	htmlJS += "</div>";
	return htmlJS;
}
