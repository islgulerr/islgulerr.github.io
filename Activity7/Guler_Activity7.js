var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

var addScore = function () {

   if($("name").value==""){	
	alert("You must enter a name and a valid score");
	return false;
   }else
	  names.push($("name").value);
  if($("score").value==""){
	 alert("You must enter a name and a valid score");
	return false;
  }else if(100<$("score").value || 0>$("score").value ){
	  alert("You must enter a name and a valid score");
	return false;
  }else
	  scores.push($("score").value);
	   
};
var Results = function () {
  var summation = 0;
  var x=0;
  var name;
  var y;
for( var i = 0; i < scores.length; i++ ){
    y = parseInt(scores[i],10);
    summation += y;
    if (y>x) x=y; 
	if(scores[i]==x) name=names[i];
}
var avg = summation/scores.length;

    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode("Results");
    h2.appendChild(h2Text);
    document.getElementById("results").appendChild(h2);
    var avgg = document.createElement("p");
    var avgText = document.createTextNode("Average Score = " + avg);
    avgg.appendChild(avgText);
    document.getElementById("results").appendChild(avgg);
    var high = document.createElement("p");
    var text = document.createTextNode("Highest Score = " + name + " with a score of " + high );
    high.appendChild(text);
    document.getElementById("results").appendChild(high);

};

var displayResults = function () {
    Results();
};

var displayScores = function () {
	
    var f_table = $("scores_table");
	var h = f_table.createTHead();
	var row = h.insertRow(0);
    var cell_n = row.insertCell(0);
	var cell_s = row.insertCell(1);
    cell_n.innerHTML = "<b>Name</b>";
	cell_s.innerHTML = "<b>Scores</b>";
	var row_h = f_table.insertRow(0);
    var cell_h = row_h.insertCell(0);
    var node_h = document.createElement("h2");
    var text_h = document.createTextNode("Scores");
    node_h.appendChild(text_h);
    cell_h.appendChild(node_h);
    for (i = 0; i < scores.length; i++) {
		var row = f_table.insertRow(-1);
        var textNode = document.createTextNode(names[i]);
        var cellNode = row.insertCell(-1);
        cellNode.appendChild(textNode);
        var scoreNode = document.createTextNode(scores[i]);
        var cellNode2 = row.insertCell(-1);
        cellNode2.appendChild(scoreNode);
    }};

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};