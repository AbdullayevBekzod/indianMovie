  // <div class="movie">
// 		<img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzc2MjYwNF5BMl5BanBnXkFtZTgwNTk4ODk1MDE@._V1_SY250_CR0,0,187,250_AL_.jpg" alt="kino rasmi">
// 		<h3><a href="#">Pardes</a></h3>
// 		<p>Genres:Musical,Romance,Action <br>Date:1997-12-08</p>
// 	</div>

var container=document.querySelector(".container");
function add(array){
	array.forEach(function(movie) {
   var moviediv=document.createElement("div");
   moviediv.classList.add("movie");
   var img=document.createElement("img");
   img.src=movie.posterurl;
   img.alt="Kino rasmi";
   var h3=document.createElement("h3");
   var a=document.createElement("a");
   a.href="#";
   a.innerText=movie.title;
   var p=document.createElement("p");
   var genres1="";
  
   movie.genres.map(function(genre) {
   genres1+=genre;

   genres1+=" ";
   })
   p.innerText="Genres:"+genres1;
   var p1=document.createElement("p");
   p1.innerText=movie.releaseDate;
    h3.appendChild(a);
   moviediv.appendChild(img);
   moviediv.appendChild(h3);
   moviediv.appendChild(p);
   moviediv.appendChild(p1);
   container.appendChild(moviediv);
})
}
add(movies);
 function search(){
  var suz=document.querySelector("input").value;
  container.innerHTML="";
  var searchmovies=movies.filter(function(movie) {
  return movie.title.toLowerCase().includes(suz.toLowerCase());
  });
 
  add(searchmovies);
}

function categories(c){
	container.innerHTML="";
	var categoriesSort=movies.filter(function(movie) {
		return movie.genres.includes(c);
	})
	add(categoriesSort);
}