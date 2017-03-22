/**
 * (c)2016 codeams@gmail.com
 */

$(function() {

	var timer = 15000
	var palette = [ // Material
		'#F44336', // Red 500
		'#E91E63', // Pink 500
		'#673AB7', // Deep purple 500
		'#3F51B5', // Indigo 500
		'#2196F3', // Blue 500
		'#009688', // Teal 500
		'#4CAF50', // Green 500
		'#CDDC39', // Lime 500
		'#FFA000', // Amber 700
		'#FF5722' // Deep orange 500
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