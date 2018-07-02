(function($) {
// JavaScript Document
$(document).ready(function(){
	
var scripts = document.getElementsByTagName('script');
var myScript = scripts[ scripts.length - 1 ];

var queryString = myScript.src.replace(/^[^\?]+\??/,'');

var params = parseQuery( queryString );

function parseQuery ( query ) {
  var Params = new Object ();
  if ( ! query ) return Params; // return empty object
  var Pairs = query.split(/[;&]/);
  for ( var i = 0; i < Pairs.length; i++ ) {
    var KeyVal = Pairs[i].split('=');
    if ( ! KeyVal || KeyVal.length != 2 ) continue;
    var key = unescape( KeyVal[0] );
    var val = unescape( KeyVal[1] );
    val = val.replace(/\+/g, ' ');
    Params[key] = val;
  }
  return Params[key];
}
//console.log(myScript);
//console.log(queryString);
//console.log(params);
	var garageId = params;//getQueryVariable("id");
	var theURL = "http://localhost/garages?id="+garageId;	
	$.get("http://localhost/garages?id="+garageId, function(response) {	
		 document.write(response);
	});
	//loadXMLDoc(theURL);
	function loadXMLDoc(theURL)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                var content = xmlhttp.responseText;
                console.log(content);
            }
        }
        xmlhttp.open("GET", theURL, false);
        xmlhttp.send();
    }
	
	
});

})(jQuery);
