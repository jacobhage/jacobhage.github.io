! function ($, App) {

	App.Init = () => {
		App.Navbar = App.Navbar();
		App.TextToggler = App.TextToggler();
	}

	$(() => {
		App.Init();
	})

}(jQuery, App = App || {})
