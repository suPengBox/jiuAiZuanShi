<?php
	header("content-type","text/html;charset=utf-8");
	//1.接收客户端数据
	$userName=$_POST['userName'];
	$userPass=$_POST['userPass'];	
	//2.保存数据库
	//1）建立连接
	$conn = mysql_connect("localhost:3306","root","235611");
	//2)选择数据库
	mysql_select_db("mydb1702",$conn);
	//3)执行SQL语句
	$sqlStr ="insert into useMsg(userName,userPass) values('".$userName."','".$userPass."')";
	//echo $sqlStr;
	mysql_query($sqlStr,$conn);
	//4)关闭数据库
	mysql_close($conn);
?>