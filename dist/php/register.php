<?php
	header("content-type","text/html;charset=utf-8");
	//1.建立搭桥
	$conn=mysql_connect("localhost:3306","root","235611");
	//2.选择数据库
	mysql_select_db("mydb1702",$conn);
	$stuId = '170205';
	$stuNam = '宝宝';
	$stuSex='男';
	$stuAge = 28;
	//3、执行SQL语句
	$sqlStr ="insert into stuInfo(stuId,stuNam,stuSex,stuAge) values('170208','假如','女',23)";
	//$sqlStr ="insert into stuInfo(stuId,stuNam,stuSex,stuAge) values('170201','蒲晨辉','男',18)";
	//$sqlStr ="insert into stuInfo(stuId,stuNam,stuSex,stuAge) values('170204','刘德华','男',50)";
	//$sqlStr ="insert into stuInfo(stuId,stuNam,stuSex,stuAge) values('".$stuId."','".$stuNam."','".$stuSex."',".$stuAge.")";
	mysql_query($sqlStr,$conn);
	//4、关闭数据库
	mysql_close($conn);
?>