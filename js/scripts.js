function showPopup(multipleFilter) {
	const popup = document.querySelector('#popup_g');
  
  if (multipleFilter) {
  	popup.classList.add('multiple-filter');
  } else {
  	popup.classList.remove('multiple-filter');
  }
  
  popup.classList.remove('hide');
}
function showPopup2(multipleFilter) {
	const popup = document.querySelector('#popup_b');
  
  if (multipleFilter) {
  	popup.classList.add('multiple-filter');
  } else {
  	popup.classList.remove('multiple-filter');
  }
  
  popup.classList.remove('hide');
}
function closePopup() {
	const popup = document.querySelector('#popup_g');
  popup.classList.add('hide');
}
function closePopup2() {
	const popup = document.querySelector('#popup_b');
  popup.classList.add('hide');
}
