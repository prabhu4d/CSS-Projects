const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const OverlayClose = overlay.querySelector(".close");

function generateHTML([h, v]) {
  return `
        <div class="item h${h} v${v}">
            <img src="images/${randomNumber(12)}.jpg" >
            <div class="item__overlay">
                <button>View ➡️</button>
            </div>
        </div>
    `;
}

function randomNumber(limit){
    return Math.floor(Math.random() * limit) + 1
}

function showOverlayImage(e){
    const src = e.target.parentElement.parentElement.children[0].src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close(){
    overlay.classList.remove('open');
    console.log("Closing")
}

const digits = Array.from({length: 50}, ()=> [randomNumber(4), randomNumber(4)])
                .concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]
                        ,[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]
                        ,[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]
                        ,[1,1],[1,1],[1,1]]);

gallery.innerHTML = digits.map(generateHTML).join('');

const views = document.querySelectorAll('.item button');

views.forEach(item => item.addEventListener('click', showOverlayImage));
OverlayClose.addEventListener('click', close);