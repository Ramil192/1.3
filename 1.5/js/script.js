let btn_show_all = document.getElementById('next');

let next_svg = document.getElementById('next__svg');
let next_flag = true;
btn_show_all.addEventListener('click', f);

function f() {
	if (next_flag) {
		swiper_wrapper.style.height = "auto";
		btn_show_all.textContent = "Скрыть";
		next__svg.style.transform = "rotate(180deg)";
		next_flag = false;
		console.log('1');
	} else {
		swiper_wrapper.style.height = "160px";
		btn_show_all.textContent = "Показать все";
		next__svg.style.transform = "rotate(360deg)";
		next_flag = true;
		console.log('2');
	}
}


if (document.body.clientWidth < 556) {

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	//console.log("+");
} else {
	var swiper = document.querySelector('.swiper-container');
	var swiper_slide = swiper.querySelectorAll('.swiper-slide');
	var swiper_wrapper = swiper.querySelector('.swiper-wrapper');


	swiper_wrapper.classList.remove('swiper-wrapper');
	swiper_wrapper.classList.add('brend');

	for (let i = 0; i < swiper_slide.length; i++) {
		swiper_slide[i].classList.remove("swiper-slide");
		swiper_slide[i].style.flexGrow = 0;
		//console.log("+");
	}


};