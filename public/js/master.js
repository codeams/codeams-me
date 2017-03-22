/**
 * (c)2016 codeams@gmail.com
 */

$(function() {

	var timer = 15000
	var palette = [
		'#F44336',
		'#E91E63',
		'#7B1FA2',
		'#673AB7',
		'#3F51B5',
		'#1976D2',
		'#0288D1',
		'#009688',
		'#388E3C',
		'#FF8F00',
		'#F4511E',
		'#546E7A'
	]


	var $name = $( '.message strong' )
	var $icons = $( '.social-icons .icon' )

	var updateColor = function() {
		var randomIndex = Math.round( Math.random() * palette.length - 1 )
		var color = palette[randomIndex]

		$name.css({ color: color })
		$icons.css({ 'background-color': color })
	}

	setTimeout(function() {
		$name.css({ transition: 'color ' + timer + 'ms' })
		$icons.css({ transition: 'background-color ' + timer + 'ms' })

		setInterval( updateColor, timer )
		updateColor()
	}, 1000)

	updateColor()
})