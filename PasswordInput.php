</!DOCTYPE html>
<html>
<!--balance enquiry page-->
<head>
	<div><h2 class="barone">DB Bank</h2></div>
	

<div>
<div><ul class="menusubnav">
		<li class="orange"><a href="Customerhomepage.php">Customer</a></li>
		<li><a href="BalEnqInput.php">Balance Enquiry</a></li>
		<li><a href="Customerfundinput.php">Fund Transfer</a></li>
		<li><a href="PasswordInput.php">Changepassword</a></li>
		<li><a href="MiniStatementinput.php">Mini Statement</a></li>
		<li><a href="Logout.php">Log out</a></li>
	</ul></div>
</div>

<title>DB Bank change password</title>


<!--comments: To link to css files-->
<link rel="stylesheet" type="text/css" href="css/style.css">

<!--comments: To link to javascript files-->
<script language="JavaScript" src="js/deshbank.js"></script>

</head>

<!--Change Password body-->

<body>

<table border="0" width="70%" align="center" class="layout1">

	<form name="fbal" method="POST" action="">
		<td colspan="2">
		<table border="0" align="center">
		<tr>
			<td align="center" colspan="2"> 
				<p class="heading3"> Change Password </p>
			</td>
		</tr>

		<!-- Old Password -->
		<tr>
			<td>Old Password</td>
			<td><input type="password" name="oldpassword" maxlength="25">
			<label id="message20"></label>	
			</td>
		</tr>

		<!-- New Password -->

			<tr>
			<td>New Password</td>
			<td><input type="password" name="newpassword" maxlength="25">
			<label id="message21"></label>	
			</td>
		</tr>

		<!--Confirm Password -->

		<tr>
			<td>Confirm Password</td>
			<td><input type="password" name="confirmpassword" maxlength="25">
			<label id="message22"></label>	
			</td>
		</tr>
	
	<!--Submit and reset buttons -->

	<tr>
	<td></td>
	<td>
		<input type="submit" name="Submit" value="Submit"> 
		<input type="reset" name="Reset" value="Reset">
	</td>	

	</tr>

	

	</table>	
	</td>

</form>

</table>	

<!--comments: to link to home page -->
			<p align="right"><a href="Customerhomepage.php">Home</a></p>
		
</body>
</html>