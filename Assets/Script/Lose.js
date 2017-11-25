#pragma strict
var style1: GUIStyle;
var style2: GUIStyle;
var labstyle: GUIStyle;
function OnGUI(){
	GUI.Label(Rect(20, 20, 500, 250), "Y O U  L O S E", labstyle);
	
	if(GUI.Button(Rect(150, 70, 150, 100), "R E T R Y", style1)){
		Application.LoadLevel("Main_Game");
	}
	if(GUI.Button(Rect(150, 150, 150, 100), "Q U I T", style2)){
		Application.Quit();
	}
	
}