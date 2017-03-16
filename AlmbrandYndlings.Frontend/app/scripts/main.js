! function ($, App) {

	App.Init = () => {
		App.Navbar = App.Navbar();
	}

	$(() => {
		App.Init();
	})

}(jQuery, App = App || {})
