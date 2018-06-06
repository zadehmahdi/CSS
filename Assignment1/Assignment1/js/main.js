	// document.getElementsByClassName('form-control')[0].addEventListener('change',function(){

	// 		document.getElementsByClassName('form-control')[0].classList.add('checked');
	// 	});


	// document.getElementsByClassName('form-control')[1].addEventListener('change',function(){

	// 		document.getElementsByClassName('form-control')[1].classList.add('checked');
	// 	});


	// document.getElementsByClassName('form-control')[2].addEventListener('change',function(){

	// 		document.getElementsByClassName('form-control')[2].classList.add('checked');

	// });


	// document.getElementsByClassName('form-control')[3].addEventListener('change',function(){

	// 		document.getElementsByClassName('form-control')[3].classList.add('checked');

	// });


	// document.getElementsByClassName('form-control')[4].addEventListener('change',function(){

	// 		document.getElementsByClassName('form-control')[4].classList.add('checked');
	
	// });

window.addEventListener('load', function(){
	Array.from(document.getElementsByClassName('form-control')).forEach(function(item){
		item.addEventListener('change',function(){
			item.style.border = '3px solid green';
		})
	})

})