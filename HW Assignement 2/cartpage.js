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

  if (p != null) {
    if (p[product.title] == undefined) {
      p = {
        ...p,
        [product.title]: product,
      };
    }
    p[product.title].tickets_in_cart += 1;
  } else {
    product.tickets_in_cart = 1;
    p = {
      [product.title]: product,
    };
  }
  localStorage.setItem("moviesInCart", JSON.stringify(p));
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

function cartObject() {
  let cart = localStorage.getItem("moviesInCart");
  cart = JSON.parse(cart);
  let cost = localStorage.getItem("totalCost");
  let table = document.querySelector("#tableID");

  if (cart) {
    console.log(cart);

    Object.values(cart).map((movies) => {
      table.innerHTML += `
            <tbody class="table table-bordered table-light">
                <tr>
                    <th scope="row"><button id="this">REMOVE</button>${movies.title}</th>
                    <td>R${movies.ticket_price}</td>
                    <td><button id="this">-</button>
                    ${movies.tickets_in_cart}
                    <button id="this">+</button>
                   </td>
                    <td>R${movies.tickets_in_cart * movies.ticket_price}</td>
                </tr>
            </tbody>
              `;
    });
    table.innerHTML += `
          <tfoot class="table table-bordered table-light">
            <tr>
                    <td colspan="4">
                    Total:R ${cost}
                    </td>
            </tr>
        </tfoot>
          `;
  } else {
    table.innerHTML += `
          <div class ="empty">
          NO MOVIES IN CART
          </div>
          `;
  }
}
cartObject();
