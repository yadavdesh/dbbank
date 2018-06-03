


// Account Number Validation

function validateaccountno()
{

	
	var x= document.forms[0]["accountno"].value;
	if(x==null || x=="")
	{
		document.getElementById('message2').style.visibility="visible";
		document.getElementById('message2').innerHTML="Account Number must not be blank";
	}
	else if(x!=parseInt(x))
	{ if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(x))
		   {
			document.getElementById('message2').style.visibility="visible";
			document.getElementById('message2').innerHTML="Special characters are not allowed";
		   }
	    else
	    {
		document.getElementById('message2').style.visibility="visible";
		document.getElementById('message2').innerHTML="Characters are not allowed";
		return false;
		
	    }
	}
       else
	{
         document.getElementById('message2').style.visibility="hidden";
	 } 
		
	
	
}


//Amount Validation

function validateammount()
{
	var y = document.forms[0]["ammount"].value;
	if(y==null || y=="")
	{
		document.getElementById('message1').style.visibility="visible";
		document.getElementById('message1').innerHTML="Amount field must not be blank";
	}
	else if(y!=parseInt(y))
	{ if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(y))
		   {
			document.getElementById('message1').style.visibility="visible";
			document.getElementById('message1').innerHTML="Special characters are not allowed";
		   }
	    else
	    {
		document.getElementById('message1').style.visibility="visible";
		document.getElementById('message1').innerHTML="Characters are not allowed";
		return false;
		
	    }
	}
       else
	{
         document.getElementById('message1').style.visibility="hidden";
	 } 
		 
		

}



//Payers account validation

function validatepayersaccountno()
{	
	
	var payersacc=document.forms[0]["payersaccount"].value;
	if(payersacc==null ||payersacc=="")
	{
		document.getElementById('message10').style.visibility="visible";
		document.getElementById('message10').innerHTML="Payers Account Number must not be blank";
	}
	
	else if(payersacc!=parseInt(payersacc))
	{ if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(payersacc))
		   {
			document.getElementById('message10').style.visibility="visible";
			document.getElementById('message10').innerHTML="Special characters are not allowed";
		   }
	    else
	    {
		document.getElementById('message10').style.visibility="visible";
		document.getElementById('message10').innerHTML="Characters are not allowed";
		return false;
		
	    }
	}
       else
	{
         document.getElementById('message10').style.visibility="hidden";
	 } 
		 
}

//Payee account validation

function validatepayeeaccountno()
{	
	
	var payeesacc=document.forms[0]["payeesaccount"].value;
	if(payeesacc==null ||payeesacc=="")
	{
		document.getElementById('message11').style.visibility="visible";
		document.getElementById('message11').innerHTML="Payees Account Number must not be blank";
	}
	
	else if(payeesacc!=parseInt(payeesacc))
	{ if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(payersacc))
		   {
			document.getElementById('message11').style.visibility="visible";
			document.getElementById('message11').innerHTML="Special characters are not allowed";
		   }
	    else
	    {
		document.getElementById('message11').style.visibility="visible";
		document.getElementById('message11').innerHTML="Characters are not allowed";
		return false;
		
	    }
	}
       else
	{
         document.getElementById('message11').style.visibility="hidden";
	 } 
		 
}

// Amount validation

function validateamount()
{
	var y = document.forms[0]["amount"].value;
	if(y==null || y=="")
	{
		document.getElementById('message1').style.visibility="visible";
		document.getElementById('message1').innerHTML="Amount field must not be blank";
	}
	else if(y!=parseInt(y))
	{ if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(y))
		   {
			document.getElementById('message1').style.visibility="visible";
			document.getElementById('message1').innerHTML="Special characters are not allowed";
		   }
	    else
	    {
		document.getElementById('message1').style.visibility="visible";
		document.getElementById('message1').innerHTML="Characters are not allowed";
		return false;
		
	    }
	}
       else
	{
         document.getElementById('message1').style.visibility="hidden";
	 } 
		 
     

		

}

//Number Validation

function validatenum_transaction()
{	

     var numtran=document.forms[0]["numtransaction"].value;
	if(numtran==null ||numtran=="")
	{
		document.getElementById('message13').style.visibility="hidden";
	
	}
	else if(numtran!=parseInt(numtran))
	{ 
	    if (/[\/!:\-\*?"<>_|~@#$`%^.&[()-,+=/\\/'";\]{}]/.test(numtran))
		   {
			document.getElementById('message13').style.visibility="visible";
			document.getElementById('message13').innerHTML="Special characters are not allowed";
		   }
	    else
	    {
		document.getElementById('message13').style.visibility="visible";
		document.getElementById('message13').innerHTML="Characters are not allowed";
		return false;
		
	    }
	}
       else
	{
         document.getElementById('message13').style.visibility="hidden";
	} 
		
		
}



//Description Validation


function validatedesc()
{	
	var des=document.forms[0]["desc"].value;
	if(des==null || des=="")
	{
		document.getElementById('message17').style.visibility="visible";
		document.getElementById('message17').innerHTML="Description can not be blank";
	}
        else
	{
		document.getElementById('message17').style.visibility="hidden";
        }
}


//Password Validation

function validatepassword()
{	
	var pass=document.forms[0]["password"].value;
	if(pass==null || pass=="")
	{
		document.getElementById('message18').style.visibility="visible";
		document.getElementById('message18').innerHTML="Password must not be blank";
	}
        else
	{
		document.getElementById('message18').style.visibility="hidden";
        }
}


  

// Old password validation

function validateoldpassword()
{	
	var opass=document.forms[0]["oldpassword"].value;
	if(opass==null || opass=="")
	{
		document.getElementById('message20').style.visibility="visible";
		document.getElementById('message20').innerHTML="Old Password must not be blank";
	}
        else
	{
		document.getElementById('message20').style.visibility="hidden";
	}
}

// New Password Validation

function validatenewpassword()
{	
	var npass=document.forms[0]["newpassword"].value;
	var num = new RegExp("[0-9]","g");
	var spe = new RegExp("[\!\@\#\$\%\^\&\*\(\)\_\+]");
	if(npass==null || npass=="")
	{
		document.getElementById('message21').style.visibility="visible";
		document.getElementById('message21').innerHTML="New Password must not be blank";
	}
	else if(!(npass.search(num) >= 0))
	{
			document.getElementById('message21').style.visibility="visible";
			document.getElementById('message21').innerHTML="Enter at-least one numeric value";
	}
	else if(!(npass.search(spe) >= 0))
	{
			document.getElementById('message21').style.visibility="visible";
			document.getElementById('message21').innerHTML="Enter at-least one special character";
	}
	else if(npass.match("password") || npass.match("Password") || npass.match("New Password"))
	{
			document.getElementById('message21').style.visibility="visible";
			document.getElementById('message21').innerHTML="Choose a difficult Password";
	}
	else
	{
		document.getElementById('message21').style.visibility="hidden";
	}
}

//Confirm password validation

function validateconfirmpassword()
{	
	var cpass=document.forms[0]["confirmpassword"].value;
	var npass=document.forms[0]["newpassword"].value;
	
	if(cpass==null || cpass=="")
	{
		document.getElementById('message22').style.visibility="visible";
		document.getElementById('message22').innerHTML="Confirm Password must not be blank";
	}
	else if(cpass != npass)
	{
		document.getElementById('message22').style.visibility="visible";
		document.getElementById('message22').innerHTML="Passwords do not Match";
	}
	else
	{
		document.getElementById('message22').style.visibility="hidden";
	}

}



//Validation for blank form

function validatefields()
{
	//alert('called');
	var s1=document.getElementsByTagName('label');
	var i1=s1[0].getAttribute("id");
	var i2=document.getElementById(i1).style.visibility;
	if(i2=="hidden")
	{
		return true;
	}
	else{
		alert('Please fill all fields');
		return false;
	}
}


//Change password form Validation

function validateChangePassword()
{
var v1=document.getElementById("message20").style.visibility;
var v2=document.getElementById("message21").style.visibility;
var v3=document.getElementById("message22").style.visibility;

if(v1=="hidden" && v2=="hidden" && v3=="hidden")
{
 return true;
}
else{
 alert("Please fill all fields");
 return false;
}
}

//Fundtransfer form validation

function validateFundTransfer()
{
var v1=document.getElementById("message1").style.visibility;
var v2=document.getElementById("message10").style.visibility;
var v3=document.getElementById("message11").style.visibility;
var v4=document.getElementById("message17").style.visibility;

if(v1=="hidden" && v2=="hidden" && v3=="hidden" && v4=="hidden")
{
 return true;
}
else{
 alert("Please fill all fields");
 return false;
}
}



// Account number validation

function validateaccount()
{	
	var acc1=document.forms[0]["accountno"].value;
	if(acc1 == "Select Account")
	{
		document.getElementById('message25').style.visibility="visible";
		document.getElementById('message25').innerHTML="Please Select atleast one Account";
	}
	else
	{
		document.getElementById('message25').style.visibility="hidden";
	}

}

// Fundtransfer Form validation

function validateFundTransfer()
{
var v1=document.getElementById("message1").style.visibility;
var v2=document.getElementById("message10").style.visibility;
var v3=document.getElementById("message11").style.visibility;
var v4=document.getElementById("message17").style.visibility;

if(v1=="hidden" && v2=="hidden" && v3=="hidden" && v4=="hidden")
{
 return true;
}
else{
 alert("Please fill all fields");
 return false;
}
}

