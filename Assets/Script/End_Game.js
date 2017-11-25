#pragma strict

function OnTriggerEnter(other : Collider){
	if(other.tag == "Enemy"){
		print("HHHHH");
		Application.LoadLevel("Lose_Game");
	}
}
