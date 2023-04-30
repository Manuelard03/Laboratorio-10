const carruseles = document.querySelectorAll(".carousel");
const divs = Array.from(carruseles);

class Pelicula {
  titulo = "";
  banner = "";
  tarjeta = "";
  overview = "";

  constructor(card, banner, id, banner_title, sinopsis) {
    this.tarjeta = card;
    this.banner = banner;
    this.id = id;
    this.banner_title = banner_title;
    this.synopsis = sinopsis;
  }

  render() {
    const card = document.createElement("div");

    const a = document.createElement("a");
    const img = document.createElement("img");
    const boton = document.createElement("button");
    const añadir = document.createElement("button");
    const rating = document.createElement("div");

    card.classList.add("pelicula");
    card.id = this.id;
    rating.classList.add("rating");
    img.src = this.tarjeta;
    a.href = "#";
    card.appendChild(a);
    a.appendChild(img);
    rating.appendChild(boton);
    rating.appendChild(añadir);
    card.appendChild(rating);

    return card;
  }
}