#pragma strict
var shootTime : float;
var counter : float;
var missile : GameObject;
var enemy_fire : AudioSource;
function Start () {
	NewTime();
}

function Update () {
	counter += Time.deltaTime;
	if(counter > shootTime){
		Instantiate(missile, transform.position, Quaternion.identity);
		NewTime();
		enemy_fire.Play();
	}
}

function NewTime(){
	counter = 0;
	shootTime = Random.Range(0.5, 2.0);

}