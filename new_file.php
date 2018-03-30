<?php 
	$name = $_POST['userName'];
	$psd = $_POST['password'];
	$success = array('code' => 1, 'url' => "dd.html");
	$fail = array('code' => 2, 'msg' => "用户名或密码错误");
	$success = json_encode($success);
	$fail = json_encode($fail);
	header('Content-Type:application/json');
	if($name == "soi")
	{
		echo $success;
	}
	else
		echo $fail;
?>