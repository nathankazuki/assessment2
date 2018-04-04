document.getElementById("color").addEventListener("change", function(){
   document.getElementById("preview").style.background = document.getElementById("color").value; 
});

document.getElementById("number").addEventListener("click", function(){
    changeType('number');
});

document.getElementById("range").addEventListener("click", function(){
    changeType('range');
});

function changeType(type) {
    document.getElementById("range1").type = type;
    document.getElementById("range2").type = type;
    document.getElementById("range3").type = type;
    document.getElementById("range4").type = type;
};

document.getElementById("range1").addEventListener("change", function(){
	hair.style.width = document.getElementById("range1").value+"%";
});

document.getElementById("range2").addEventListener("change", function(){
	eyes.style.width = document.getElementById("range2").value+"%";
});

document.getElementById("range3").addEventListener("change", function(){
	nose.style.width = document.getElementById("range3").value+"%";
});

document.getElementById("range4").addEventListener("change", function(){
	mouth.style.width = document.getElementById("range4").value+"%";
});

document.getElementById("random").addEventListener("click", function(){
    randomFace();
});

function randomFace(){
    var randomH = Math.round(1+Math.random()*2);
    var randomE = Math.round(1+Math.random()*2);
    var randomN = Math.round(1+Math.random()*2);
    var randomM = Math.round(1+Math.random()*2);
    
    hair.src = "img/hair"+randomH+".png";
    eyes.src = "img/eyes"+randomE+".png";
    nose.src ="img/nose"+randomN+".png";
    mouth.src = "img/mouth"+randomM+".png";
    
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    
    preview.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
};

document.getElementById("plus").addEventListener("click", function(){
	createFace();
});

function createFace() {
	var newDiv = document.createElement("div");
    newDiv.className = 'col-xl-12 col-lg-8 col-md-6 col-sm-4';
	newDiv.style.width = 100+"px";
	newDiv.style.height = 100+"px";
	newDiv.style.margin = 1+"%";
	newDiv.style.display = "inline-block";
	newDiv.style.backgroundColor = 
    document.getElementById("preview").style.backgroundColor;
    
	var nimage1 = document.createElement("img");
	var nimage2 = document.createElement("img");
	var nimage3 = document.createElement("img");
	var nimage4 = document.createElement("img");
	
	newDiv.appendChild(nimage1);
	newDiv.appendChild(nimage2);
	newDiv.appendChild(nimage3);
	newDiv.appendChild(nimage4);
    
    nimage1.src = hair.src;
    nimage1.style.width = hair.style.width;
    nimage1.style.left = 0;
    nimage1.style.right = 0;
    nimage1.style.margin = "auto";
    nimage1.style.top = hair.style.top;
    nimage1.style.display = "block";
    
    nimage2.src = eyes.src;
    nimage2.style.width = eyes.style.width;
    nimage2.style.left = 0;
    nimage2.style.right = 0;
    nimage2.style.margin = "auto";
    nimage2.style.top = eyes.style.top;
    nimage2.style.display = "block";
    
    nimage3.src = nose.src;
    nimage3.style.width = nose.style.width;
    nimage3.style.left = 0;
    nimage3.style.right = 0;
    nimage3.style.margin = "auto";
    nimage3.style.top = nose.style.top;
    nimage3.style.display = "block";
    
    nimage4.src = mouth.src;
    nimage4.style.width = mouth.style.width;
    nimage4.style.left = 0;
    nimage4.style.right = 0;
    nimage4.style.margin = "auto";
    nimage4.style.top = mouth.style.top;
    nimage4.style.display = "block";
	
    
	document.getElementById("display").appendChild(newDiv);
};

document.getElementById("Random").addEventListener("click", function(){
    timer = setInterval(randomFace, 500);
    timer1 = setInterval(createFace, 500);
});

document.getElementById("Stop").addEventListener("click", function(){
   clearInterval(timer); 
   clearInterval(timer1);
});