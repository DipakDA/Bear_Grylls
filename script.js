function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
} 

function sleep(milliseconds)
{
	var start = new Date().getTime();
	for(car i =0; i<1e7;i++)
	{
		if((new Date().getTime() - start) > milliseconds)
		{
			break;
		}
	}
}

function appear()
{
	sleep(4000);
	var object = document.getElementById("popup");
	object.style.display = "block";
	}
		
