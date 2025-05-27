function highlight() {
    //Write your code here
let query=document.querySelectorAll('strong');

	for(let q of query){
		q.style.color =  "rgb(0, 128, 0)";
	}
	

}


function return_normal() {
    //Write your code here
let query1=document.querySelectorAll('strong');
	for(let q of query1){
		q.style.color="black";
	}
    
}
