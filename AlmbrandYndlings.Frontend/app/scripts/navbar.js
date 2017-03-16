! function ($, App) {

	App.Navbar = () => {

    console.log('ready to go!')
		const $menuToggler = $('.navbar__menu-toggler, .navbar__menu-overlay, .navbar__menu-close');

		$menuToggler.click(function () {
			$('.navbar__container').toggleClass('is-open');
		})

		return {}
	}

}(jQuery, window.App = window.App || {})
