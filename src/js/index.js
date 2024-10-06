// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')


//Burger

const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
	nav.classList.toggle("nav_active");
	burger.classList.toggle("burger_active");
	navList.classList.toggle("nav__list_active")
	navLinks.forEach(link => {
		link.classList.toggle("nav__link_active")
	})
	if (burger.classList.contains("burger_active")) {
		document.body.style.overflow = "hidden";
	}
	else{
		document.body.style.overflow = "";
	}
});

navLinks?.forEach(link => {
	link.addEventListener("click", (event) => {
		nav.classList.remove("nav_active");
		burger.classList.remove("burger_active");
		navList.classList.remove("nav__list_active");


		document.body.style.overflow = "";

		navLinks.forEach(link => link.classList.remove("nav__link_active"));


	});

});


//Calendar Slider

function slider(elem) {
	const slider = document.querySelector(`[data-slider="${elem}"]`);
	const sliderList = slider.querySelector(".calendar__month-list");
	const sliderSlides = slider.querySelectorAll(".calendar__month-item");
	const sliderButtonPrev = slider.querySelector(".calendar__button--prev");
	const sliderButtonNext = slider.querySelector(".calendar__button--next");

	sliderSlides.forEach(slide => {
		sliderButtonPrev.addEventListener("click", () => {
			sliderList.scrollBy({
				left: -slide.offsetWidth,
				behavior: "smooth",
			})
		});

		sliderButtonNext.addEventListener("click", () => {
			sliderList.scrollBy({
				left: slide.offsetWidth,
				behavior: "smooth",
			});

			if (sliderList.scrollLeft === sliderList.scrollWidth - sliderList.offsetWidth) {
				sliderList.scrollLeft = 0;
			}
		});
	});

	return slider;
};

slider("calendar");
