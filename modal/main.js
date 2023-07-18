var modal= document.getElementById('simppleModal');
var modalBtn= document.getElementById('modalBtn');
var closebtn =document.getElementById('closeBtn');

modalBtn.addEventlistener('click', openModal);
function openModal(){
	modal.style.display = 'block';

}