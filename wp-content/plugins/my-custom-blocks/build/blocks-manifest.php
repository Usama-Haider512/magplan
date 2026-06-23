<?php
// This file is generated. Do not modify it manually.
return array(
	'home-banner-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'my-custom-blocks/home-banner-section',
		'title' => 'Home Banner Section',
		'category' => 'widgets',
		'icon' => 'cover-image',
		'description' => 'Home Banner Section Block',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Your Heading Here'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Your description text here'
			),
			'bgImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'button1Text' => array(
				'type' => 'string',
				'default' => 'Button 1'
			),
			'button1Link' => array(
				'type' => 'string',
				'default' => '#'
			),
			'button2Text' => array(
				'type' => 'string',
				'default' => 'Button 2'
			),
			'button2Link' => array(
				'type' => 'string',
				'default' => '#'
			)
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:../index.js'
	)
);
