#pragma strict

function Start () {
	yield WaitForSeconds(5);
	Destroy(gameObject);
}

function Update () {
	transform.Translate(Vector3.down * 50 * Time.deltaTime);

}

function OnTriggerEnter(other : Collider){
	if(other.tag == "Player"){
		Application.LoadLevel("Lose_Game");
		Destroy(gameObject);
	}
	else if(other.tag == "Base"){
		Destroy(other.gameObject);
		Destroy(gameObject);
	}
}
