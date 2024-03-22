import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImg } from "./js/pixabay-api";
import { makeCardMarkup } from "./js/render-functions";

const formEl = document.querySelector(".form")
const inputEl = document.querySelector('.input');
const loaderCont = document.querySelector('.loader-container')
const galleryList = document.querySelector('.gallery')

formEl.addEventListener('submit', onBtnSearch);
// loader.style.display = 'flex';

function onBtnSearch(e) {
    e.preventDefault();
    const query = inputEl.value;
    fetchImg(query)
    .then((data) => {
        loaderCont.style.display = 'flex';
        formEl.reset();
        galleryList.innerHTML = '';
        const { totalHits, hits } = data;
        if (totalHits === 0) {
            return iziToast.warning({
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topCenter",
            });  
        };
        setTimeout(() => {
            loaderCont.style.display = 'none';
            makeCardMarkup(hits);
        }, 2000);
        
    })
        .catch(err => {
        return iziToast.error({
            title: '',
            message: 'Something went wrong. Please try again!',
            position: 'topCenter',
        })
    })
}