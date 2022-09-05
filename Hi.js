let dark = document.querySelector('.dark-theme');
dark.classList.add('light-theme');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
	dark.classList.toggle('light-theme');
};
