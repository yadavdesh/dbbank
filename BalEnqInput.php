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
<title>Balance enquiry</title>

<!--comments: To link to css files-->
<link rel="stylesheet" type="text/css" href="css/style.css">

<!--comments: To link to javascript files-->
<script language="JavaScript" src="/js/deshbank.js"></script>

</head>
<!--balance enquiry body-->
<body>

	<table border="0" width="70%" align="center" class="layout1">

	<form name="fbal" method="POST" action="">
		<td colspan="2">
			<table align="center">
			
			<tr>
				<td colspan="2">
					<p class="heading3" align="center">Blance Enquiry Form</p>
				</td>
			</tr>	

			<!--comments: to display account number field -->
			<tr>
				<td> Account No</td>
				<td>
					<select name="accountno" style="width: 150px">
						<option>Select Account</option>
					</select>
					<label id="message25"></label>
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
			<!--comments: to link to home page -->
			<p align="right"><a href="Customerhomepage.php">Home</a></p>
		</td>

	</form>
	</table>
</body>
</html>