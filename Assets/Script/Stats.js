#pragma strict
var style: GUISkin;
var current_score : int = 0;
var current_enemies : int = 20;

var enemySquad : GameObject;
var enemyStartPos : Vector3;
var NextAlienSquad : GameObject;
var startline : Vector3 = new Vector3(11, 43.3, 10);

function OnGUI(){
	GUI.skin = style;
	GUI.Label(Rect(450, 20, 200, 50), "Score < " + current_score.ToString() + " >");	
}

function  Update(){
	
}
