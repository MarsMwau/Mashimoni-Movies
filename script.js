const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc53aeed8cmshac62ff46839069ep1318eajsn5ffe88234bd6',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
	.then(response => response.json())
	.then((data) => {
		let data1=""
		Object.values(data.results).forEach((item) => {
			let src;
			if(item.primaryImage === null) {
				src = "http://bitly.ws/zboJ"
			}
			else {
				src =item.primaryImage.url
			}
			data1 +=
			//for (value in elem){
			//console.log(elem[value])
			//}
			`<div class="container">
			<div class="card" >
			  <img src="${src}" class="card-img-top" alt="Image Of Warrior Nun">
			  <div class="card-body">
				<h5 class="card-title">Warrior Nun</h5>
				<p class="card-text">${item.titleText.text}</p>
				<a href="#" class="btn btn-primary">Download</a>
			  </div>
			</div>
		  </div>`

		
		})
		document.getElementsByClassName ("card-container").innerHTML=data1
	})
	.catch(err => console.error(err));