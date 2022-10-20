const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI obje başlatma
const ui = new UI();
// storage objesi üretme
const storage = new Storage();
//tüm eventlkeri yükleme
eventListeners();

function eventListeners(){
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded",function(){/*sayfa yüklendiğin de eventi*/
   let films = storage.getFilmsFromStorage();
  ui.loadAllFilms(films);
  });
  cardbody.addEventListener("click",deleteFilm); /*silme eventini ekleme*/
  clear.addEventListener("click",clearAllFilms);

}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if(title === "" || director === "" || url === ""){
    //hata mesajı yayınlanacak
    ui.displayMessages("Tüm alanları doldurun..","danger");
  } 
  else {
    // yeni Film başlangıc fonksiyonu
    const newFilm = new Film(title,director,url);
    ui.addFilmToUI(newFilm); // arayüzün film ekleme fonksiyonu
    storage.addFilmToStorage(newFilm); // storage film ekleme
    ui.displayMessages("Film başarıyla eklendi","success");

  }


ui.clearInputs(titleElement,urlElement,directorElement); /*inputa girilen değerin kaybolması çağrısı*/ 

  e.preventDefault();
}
function deleteFilm(e){ /*eklenen click eventinin fonksiyonu*/ 
  if(e.target.id === "delete-film"){
       ui.deleteFilmFromUI(e.target);
       storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
          ui.displayMessages("Silme işlemi başarılı ..","success");  
      }
}
function clearAllFilms(){
  if (confirm("Emin misinmiz?")){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();

  }
 
}