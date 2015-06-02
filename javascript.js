function bulbControl()
	{	
		
		if (document.getElementById("Image2").getAttribute('src') === 'images/turnon.png') 
		{
			document.getElementById("Image2").src="images/turnoff.png";
			
		}
		
	
		else
		{
			document.getElementById("Image2").src="images/turnon.png";
		}
	};
	
	

function colorCheck() {
	document.getElementById("button1").style.color = 'green';
	document.getElementById("button2").style.color = 'blue';
	document.getElementById("button3").style.color = 'yellow';
}
	

	
