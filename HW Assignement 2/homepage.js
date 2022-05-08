let movies = [
  {
    id: generate(), //a unique identifier for this movie
    title: "Death on the Nile", //the title of this movie
    director: "Kenneth Branagh", //the name of the director of this movie
    runtime: "127 min", //the runtime of this movie
    release_year: 2022, //the year this movie was released
    description:
      "Belgian sleuth Hercule Poirot boards a glamorous river steamer with enough champagne to fill the Nile.", //a description of this movie
    poster_url:
      "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmPosterGraphic/HO00002073?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500", //a URL or file path to an image of the poster for this movie
    cinema_number: 1, //the number of the cinema this movie will be showing in
    ticket_price: 210, //the price of a single ticket for this movie
    tickets_in_cart: 0, //the number of tickets that have been booked for this movie
  },

  {
    id: generate(), //a unique identifier for this movie
    title: "Moonfall", //the title of this movie
    director: "Roland Emmerich", //the name of the director of this movie
    runtime: "130 min", //the runtime of this movie
    release_year: 2022, //the year this movie was released
    description:
      "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.", //a description of this movie
    poster_url:
      "https://content.numetro.co.za/image_resized_files/6019-1-3-3-1642086753.jpg", //a URL or file path to an image of the poster for this movie
    cinema_number: 2, //the number of the cinema this movie will be showing in
    ticket_price: 109, //the price of a single ticket for this movie
    tickets_in_cart: 0, //the number of tickets that have been booked for this movie
  },

  {
    id: generate(), //a unique identifier for this movie
    title: "The Bubble", //the title of this movie
    director: "Judd Apatow", //the name of the director of this movie
    runtime: "126 min", //the runtime of this movie
    release_year: 2022, //the year this movie was released
    description:
      "Sneaking out. Hooking up. Melting down. The cast and crew of a blockbuster action franchise attempt to shoot a sequel while quarantining at a posh hotel.", //a description of this movie
    poster_url:
      "https://upload.wikimedia.org/wikipedia/en/8/82/The_Bubble_%282022_film%29.jpg", //a URL or file path to an image of the poster for this movie
    cinema_number: 3, //the number of the cinema this movie will be showing in
    ticket_price: 129, //the price of a single ticket for this movie
    tickets_in_cart: 0, //the number of tickets that have been booked for this movie
  },

  {
    id: generate(), //a unique identifier for this movie
    title: "Turning Red", //the title of this movie
    director: "Domee Shi", //the name of the director of this movie
    runtime: "100 min", //the runtime of this movie
    release_year: 2022, //the year this movie was released
    description:
      "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.", //a description of this movie
    poster_url:
      "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmPosterGraphic/HO00002340?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500", //a URL or file path to an image of the poster for this movie
    cinema_number: 4, //the number of the cinema this movie will be showing in
    ticket_price: 92, //the price of a single ticket for this movie
    tickets_in_cart: 0, //the number of tickets that have been booked for this movie
  },
];

var carts = document.querySelectorAll(".addCart");

for (let i = 0; i < carts.length; i++) {
  // console.log("myy looop");
  carts[i].addEventListener("click", () => {
    numberInCart(movies[i]);
    totalCost(movies[i]);
  });
}

function totalCost(movie) {
  console.log("The movie price is", movie.ticket_price);
  let cost = localStorage.getItem("totalCost");
  console.log("My cart cost is ", cost);

  if (cost != null) {
    cost = parseInt(cost);
    localStorage.setItem("totalCost", cost + movie.ticket_price);
  } else {
    localStorage.setItem("totalCost", movie.ticket_price);
  }
}

//adding things in the cart
function numberInCart(movie) {
  let product = localStorage.getItem("numberInCart");
  product = parseInt(product);

  if (product) {
    localStorage.setItem("numberInCart", product + 1);
    // console.log(product);
    document.querySelector(".cart").textContent = product + 1;
  } else {
    localStorage.setItem("numberInCart", 1);
    document.querySelector(".cart").textContent = 1;
  }
  moviesInCart(movie);
}

function moviesInCart(product) {
  
  let p = localStorage.getItem("moviesInCart");
  p = JSON.parse(p);
  // console.log("Data in array: " , p);
  if (p != null) {
    if (p[product.title] == undefined) {
      p = {
        ...p,
        [product.title]: product,
      };
    }
    p[product.title].tickets_in_cart += 1;
  } 
  else {
    product.tickets_in_cart = 1;
    p = {
      [product.title]: product,
    };
  }
  localStorage.setItem("moviesInCart", JSON.stringify(p));
}

for (var i = 0; i < movies.length; i++) {
  var a = (document.getElementById("cinema1").innerHTML =
    "Cinema " + movies[0].cinema_number);
  document.getElementById("cinema2").innerHTML =
    "Cinema " + movies[1].cinema_number;
  document.getElementById("cinema3").innerHTML =
    "Cinema " + movies[2].cinema_number;
  document.getElementById("cinema4").innerHTML =
    "Cinema " + movies[3].cinema_number;

  var b = (document.getElementById("unique1").src = movies[0].poster_url);
  document.getElementById("unique2").src = movies[1].poster_url;
  document.getElementById("unique3").src = movies[2].poster_url;
  document.getElementById("unique4").src = movies[3].poster_url;

  var c = (document.getElementsByClassName(
    "card-title mt-3 mb-3"
  )[0].innerHTML = movies[0].title);
  document.getElementsByClassName("card-title mt-3 mb-3")[1].innerHTML =
    movies[1].title;
  document.getElementsByClassName("card-title mt-3 mb-3")[2].innerHTML =
    movies[2].title;
  document.getElementsByClassName("card-title mt-3 mb-3")[3].innerHTML =
    movies[3].title;

  var d = (document.getElementsByClassName("card-text")[0].innerHTML =
    movies[0].description);
  document.getElementsByClassName("card-text")[1].innerHTML =
    movies[1].description;
  document.getElementsByClassName("card-text")[2].innerHTML =
    movies[2].description;
  document.getElementsByClassName("card-text")[3].innerHTML =
    movies[3].description;

  // a
  var f = (document.getElementsByClassName("k")[0].innerHTML =
    "Title : " + movies[0].title);
  document.getElementsByClassName("a")[0].innerHTML =
    "Director/s : " + movies[0].director;
  document.getElementsByClassName("b")[0].innerHTML =
    "Release Year :" + movies[0].release_year;
  document.getElementsByClassName("c")[0].innerHTML =
    "Runtime : " + movies[0].runtime;

  document.getElementsByClassName("kk")[0].innerHTML =
    "Title : " + movies[1].title;
  document.getElementsByClassName("aa")[0].innerHTML =
    "Director/s : " + movies[1].director;
  document.getElementsByClassName("bb")[0].innerHTML =
    "Release Year :" + movies[1].release_year;
  document.getElementsByClassName("cc")[0].innerHTML =
    "Runtime : " + movies[1].runtime;

  document.getElementsByClassName("kkk")[0].innerHTML =
    "Title : " + movies[2].title;
  document.getElementsByClassName("aaa")[0].innerHTML =
    "Director/s : " + movies[2].director;
  document.getElementsByClassName("bbb")[0].innerHTML =
    "Release Year :" + movies[2].release_year;
  document.getElementsByClassName("ccc")[0].innerHTML =
    "Runtime : " + movies[2].runtime;

  document.getElementsByClassName("kkkk")[0].innerHTML =
    "Title : " + movies[3].title;
  document.getElementsByClassName("aaaa")[0].innerHTML =
    "Director/s : " + movies[3].director;
  document.getElementsByClassName("bbbb")[0].innerHTML =
    "Release Year :" + movies[3].release_year;
  document.getElementsByClassName("cccc")[0].innerHTML =
    "Runtime : " + movies[3].runtime;
}

function generate() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function LoadCart() {
  let productNumber = localStorage.getItem("numberInCart");
  document.querySelector(".cart").textContent = productNumber;
}
LoadCart();
