<?php
	header("Content-type","text/html;charset=utf-8");
	$userName=$_GET['userName'];
	//1、建立连接（搭桥）
	$con = mysql_connect("localhost:3306","root","235611");
	//2、选择数据库
	mysql_select_db("mydb1702",$con);
	//3、执行SQL语句
	$sqlStr ="select * from useMsg where userName='".$userName."'";

	$result = mysql_query($sqlStr,$con);
	
	$rows = mysql_num_rows($result);
	
	if($rows==0){
		echo "1";
	}else{
		
		echo "0";
	}
	
	//4、关闭数据库
	mysql_close($con);
	
?>