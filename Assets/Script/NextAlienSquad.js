#pragma strict
var speed = 15;
var dir = 1;
function Start () {
	
}

function Update () {
	transform.Translate(Vector3.left * dir * speed * Time.deltaTime);
	
	if(transform.position.x >= 25){
		dir = 1;
		transform.position.y -= 5;
	}
	else if(transform.position.x <= -10){
		dir = -1;
		transform.position.y -= 5;
	}
}
