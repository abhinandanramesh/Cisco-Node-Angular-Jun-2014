
function getSpinner(){
	var counter = 0;
	function inc(){
		return ++counter;
	}
	function dec(){
		return --counter;
	}
	return {
		up : inc,
		down : dec
	};

}
/*
write a function hat will let me check if the given number is a prime number or not.
The prime finder algorthim should not be executed for a number if the number was already processed*/