#pragma strict
var speed = 10;
var dir = -1;
var enemySquad : GameObject;
var enemyStartPos : Vector3;
var NextAlienSquad : GameObject;
var startline : Vector3 = new Vector3(11, 43.3, 10);

var mtarget: Transform;
    var mspeed: float = 7.0f;
    var  EPSILON : float = 0.1f;
    var  mLookDirection: Vector3;
function Start () {

}

function Update () {
	 mLookDirection = (mtarget.position - transform.position).normalized;
        
        if ((transform.position - mtarget.position).magnitude > EPSILON)
        {
            transform.Translate(mLookDirection * mspeed * Time.deltaTime);
        }

}
