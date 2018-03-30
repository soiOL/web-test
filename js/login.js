
function keydown() {
	if(event.keyCode == "13" && document.getElementById("login1").disabled == false) { //keyCode=13是回车键
		$('#login1').click();
	}
}
function canlogin() {
	var usr = document.getElementById("txtUserName").value;
	var psd = document.getElementById("psd").value;
	if(psd != "" && usr != "")
		document.getElementById("login1").disabled = false;
	else
		document.getElementById("login1").disabled = true;
}

function login() {
	$.ajax({
		//几个参数需要注意一下
		type: "POST", //方法类型
		url: "new_file.php",
		data: $('#form1').serialize(),
		success: function(result) {
			if(result.code == 1) {
				document.getElementById("wrong").style.display = "none";
				window.location.href = result.url;
			} else {
				document.getElementById("wrong").style.display = "block";
			}
		}
	});
} 