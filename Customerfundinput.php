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
<title>DB Bank Fund transfer</title>


<!--comments: To link to css files-->
<link rel="stylesheet" type="text/css" href="css/style.css">

<!--comments: To link to javascript files-->
<script language="JavaScript" src="js/deshbank.js"></script>

</head>

<!--balance Fund transfer body-->

<body>

<table border="0" width="70%" align="center" class="layout1">

	<form name="addcust" method="POST" action="">
		<td colspan="2">
		<table border="0" align="center">
			
			<tr>
				<td align="center" colspan="2">
					<p class="heading3" align="center">Fund Transfer</p>
				</td>
				<!--payer account detail-->
				<tr>
				<td>Payers account no</td>
				<td><input type="text" name="payersaccount" value=""></td>
				</tr>

				<!--payees account detail -->


				<tr>
				<td>Payees account no</td>
				<td><input type="text" name="payeesaccount" value="">
				<label id="message11"></label>	
				</td>
				</tr>

				<!-- Amount details-->

				<tr>
				<td>Amount</td>
				<td><input type="text" name="Amount" maxlength="8">
				<label id="message1"></label>	
				</td>
				</tr>

				<!-- Transfer Description -->

				<tr>
				<td>Description</span></td>
				<td><input type="text" name="desc" value="">
				<label id="message17"></label>	
				</td>
				</tr>

				<!--form id, submit and reset button details-->
				<tr>
				<input type="hidden" name="formid" value="">
				<td></td>
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


