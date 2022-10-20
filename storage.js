function Storage(){



}
Storage.prototype.addFilmToStorage = function(newFilm){
   let films = this.getFilmsFromStorage();
   films.push(newFilm);

   localStorage.setItem("films",JSON.stringify(films)); /*stringe çevirme*/
   
}
Storage.prototype.getFilmsFromStorage = function(){
     let films;
     if(localStorage.getItem("films") === null){ /*key kontrol*/
        films = [];
     }
     else {
        films = JSON.parse(localStorage.getItem("films"));/*arraye çevirme*/
     }
     return films;

}
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
  let films = this.getFilmsFromStorage();
// splice arrayden silme metodu
  films.forEach(function(film,index){
    if(film.title === filmTitle){//child olduğu sürece
films.splice(index,1);
    }
  })

localStorage.setItem("films",JSON.stringify(films));

}
Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}