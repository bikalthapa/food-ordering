var closeBtn = document.getElementById("close_button");
var orders = document.getElementById("ordered-item");
var submitbtn = document.getElementById("submit");
var quantity = document.getElementById("quantity");
closeBtn.addEventListener('click',()=>{
if(orders.classList=="invisible"){
	orders.classList.remove("invisible");
	orders.classList.add("visible");
}else{
	orders.classList.remove("visible");
	orders.classList.add("invisible");
}
});


var a = document.getElementsByClassName("order-now");
for(const x of a){
	x.addEventListener('click',()=>{
		orders.classList.remove("invisible");
		orders.classList.add("visible");
	});
}

submitbtn.addEventListener("click",()=>{
	if(quantity.value == ""){
		alert("Please fill the form below");
	}else{
		alert("Your Food Item will be delivered soon");
		orders.classList.remove("visible");
		orders.classList.add("invisible");
	}
})