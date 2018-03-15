
//Java-script for balance inquiry

function validateAccountNo()
{
	var x= document.forms[0]["accountno"].value;
	if(x==null || x=="")
	{
		document.getElementById('message2').style.visibility="visible";
		document.getElementById('message2').innerHTML="Account Number must not be blank";

	}
	else if (x!=parseInt(x))
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