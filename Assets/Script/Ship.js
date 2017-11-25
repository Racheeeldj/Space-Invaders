#pragma strict
var speed = 15.0;
var missile : GameObject;
var enemySquad : GameObject;
var nextEnemySquad : GameObject;
var enemyStartPos : Vector3;
var fire: AudioSource;

function Start () {
	enemySquad = GameObject.Find("AlienSquad");
	nextEnemySquad = enemySquad;
	enemyStartPos = enemySquad.transform.position;
}

function Update () {
	if(Input.GetKey("right")&& transform.position.x < 25){
		transform.Translate(Vector3.right * speed * Time.deltaTime);
	}
	if(Input.GetKey("left")&& transform.position.x > -10){
		transform.Translate(Vector3.left * speed * Time.deltaTime);
	}
	if(Input.GetKeyDown("space")){
		Instantiate(missile, transform.position, Quaternion.identity);
		fire.Play();
	}
}

function Attacked(){
	Application.LoadLevel("Lose_Game");

}
