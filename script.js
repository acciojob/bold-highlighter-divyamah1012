let query=document.querySelectorAll('strong');
function highlight() {
    //Write your code here


	for(let q of query){
		q.style.color =  "rgb(0, 128, 0)";
	}
	

}


function return_normal() {
    //Write your code here

	for(let q of query){
		q.style.color="black";
	}
    
}
