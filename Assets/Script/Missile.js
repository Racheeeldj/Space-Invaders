#pragma strict

var ship: Ship;

function Start () {
	yield WaitForSeconds(5);
	Destroy(gameObject);
	
}

function Update () {
	transform.Translate(Vector3.up * 70 * Time.deltaTime);
}

function OnTriggerEnter(other : Collider){
	if(other.tag == "Enemy"){
		gameObject.Find("Main Camera").GetComponent(Stats).current_score += 250;
		gameObject.Find("Main Camera").GetComponent(Stats).current_enemies--;
		var target = other.transform.gameObject;
		var parent = other.transform.parent.gameObject;
		target.SetActive(false);
		if(gameObject.Find("Main Camera").GetComponent(Stats).current_enemies == 0){
			for(var i = 0; i<parent.transform.childCount; i++){
				parent.transform.GetChild(i).gameObject.SetActive(true);
			}
				gameObject.Find("Main Camera").GetComponent(Stats).current_enemies=20;
				parent.transform.position = new Vector3(11, 43.3, 10);
		}
		//Destroy(other.gameObject);
		Destroy(gameObject);
	}
	else if(other.tag == "Base"){
		Destroy(other.gameObject);
		Destroy(gameObject);
		
	}

}
