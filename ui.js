function UI() {}
UI.prototype.addFilmToUI = function (newFilm) {
  /*
  <tr>
  <td><img src="" class="img-fluid img-thumbnail"></td>
  <td></td>
  <td></td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> -->
<!-- <tr> */

  const filmList = document.getElementById("films");
  filmList.innerHTML += `<tr>
<td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
<td>${newFilm.title}</td>
<td>${newFilm.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>
`;
};
UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
  /*inputa girilen değerlerin kaybolması için oluşturulmuş fonksiyon*/
};
UI.prototype.displayMessages = function (message, type) {
  /* mesaj fonksiyonu*/
  const cardBody = document.querySelector(".card-body");

  // alert divini oluşturma
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;

  cardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 1000);
};
UI.prototype.loadAllFilms = function(films){

  const filmList = document.getElementById("films");
  films.forEach(function(film){
     filmList.innerHTML += `<tr>
     <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
     <td>${film.title}</td>
     <td>${film.director}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>`;

  });

}
UI.prototype.deleteFilmFromUI = function(element){ /*arayüzden silme fonksiyonu*/
  element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI = function(){
  const filmList = document.getElementById("films");

  //filmList.innerHTML = "";

 while(filmList.firstElementChild !== null){
  filmList.firstElementChild.remove();
 }

} 
