<?php
	$image_count = (!isset($_GET['count'])) ? 5 : $_GET['count'];
	$path = realpath(dirname(__FILE__)) . '\static\media\*';
	$imgs = glob($path);

	$json_output = array();


	foreach($imgs as $i => $img){
		$json_line = array(
			'id'=> $i,
			'caption'=> '',
			'src'=> str_replace(dirname(__FILE__),'',$img)
		);
		array_push($json_output,$json_line);
	}
	
	echo json_encode(array_slice($json_output,0,$image_count));
?>