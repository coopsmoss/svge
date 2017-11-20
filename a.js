var parser = new DOMParser();

var mySVG = document.getElementById("svg1");
mySVG.addEventListener("load",function() {
    var svgDoc = mySVG.contentDocument;
    parse(svgDoc);
}, false);

function parse(doc){
    if(doc.nodeName != "#comment" && doc.nodeName != "#text" && doc.nodeName != "#document"){
        var ats = doc.attributes;
        if(ats != null){
            for(var i = 0; i < ats.length; i++){
                console.log(ats[i]);
            }
        }
    }

    for(var i = 0; i < doc.childNodes.length; i++){
        parse(doc.childNodes[i]);
    }
}
