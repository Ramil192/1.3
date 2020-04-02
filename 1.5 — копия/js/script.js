let btn_show_all = document.getElementById('next');
let brend = document.getElementById('brend');
let next_svg = document.getElementById('next__svg');
let next_flag = true;
btn_show_all.addEventListener('click', f);

function f() {
	if (next_flag) {
		brend.style.height = "auto";
		btn_show_all.textContent = "Скрыть";
		next__svg.style.transform = "rotate(180deg)";
		next_flag = false;
		console.log('1');
	} else {
		brend.style.height = "160px";
		btn_show_all.textContent = "Показать все";
		next__svg.style.transform = "rotate(360deg)";
		next_flag = true;
		console.log('2');
	}
} 