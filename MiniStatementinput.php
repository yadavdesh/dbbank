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
<title>DB Bank Mini Statement</title>

<!--comments: To link to css files-->
<link rel="stylesheet" type="text/css" href="css/style.css">

<!--comments: To link to javascript files-->
<script language="JavaScript" src="js/deshbank.js"></script>

</head>

<body>

<table border="0" width="70%" align="center" class="layout1">

	<form name="fbal" method="POST" action="">

	<td>
		<table align="center">
		<tr>
		<td colspan="2"> <p class="heading3" align="center"> Mini Statement Form</p>
			
		</td>	
		</tr>

		<!-- Account number field -->

		<tr>
			<td>Account No</td>
			<td>
				<input type="number" name="accountno" maxlength="10">
				<label id="message2"></label>
			</td>
		</tr>

		<!-- coomments: to display submit and and reset buttons-->
			<tr>
				<td>
					<input type="submit" name="AccSubmit" value="Submit">
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