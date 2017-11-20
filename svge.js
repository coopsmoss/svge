var regex = new RegExp('^[0-9% ]*$'); // regular numerical string with the possibility of spaces or a percent

//wait for the svg file to load then parse it
var mySVG = document.getElementById("svg1");
mySVG.addEventListener("load",function() {
    var svgDoc = mySVG.contentDocument;
    parseXML(svgDoc);
}, false);

//given the root of the xml doc, parse the tree
function parseXML(doc){
    if(doc.nodeName != "#comment" && doc.nodeName != "#text" && doc.nodeName != "#document"){
        var ats = doc.attributes;
        if(ats != null){
            for(var i = 0; i < ats.length; i++){
                //console.log(ats[i].name);
                parseAttribute(ats[i]);
            }
        }
    }

    for(var i = 0; i < doc.childNodes.length; i++){
        parseXML(doc.childNodes[i]);
    }
}

//given an attribute, check to see if it is one that we support
function parseAttribute(attribute){
    var name = attribute.name;
    switch(name){
        case 'width'  : interpretAttribute(attribute); break;
        case 'height' : interpretAttribute(attribute); break;
        default       : break;
    }
}


//given an attribute we support, interpret and replace the value
function interpretAttribute(attribute){
    var value = attribute.value;
    if(value.match(regex)){
        return; //no reason to interpret
    }
    //console.log(value);
    var result = eval(value);
    //console.log(result);
    attribute.value = result;
}
