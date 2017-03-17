! function ($, App) {

	App.TextToggler = () => {

    console.log('ready to toggle!')
		const $textToggler = $('.btn__toggler');

		$textToggler.click(function () {
      let $this = $(this),
          toggleTarget = '#' + $this.attr('data-target');

      $textToggler.addClass('btn__toggler--inactive')
      $this.removeClass('btn__toggler--inactive')
      $('.text-toggle').addClass('hide')
			$(toggleTarget).removeClass('hide')
		})

		return {}
	}

}(jQuery, window.App = window.App || {})
