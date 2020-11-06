const showModal = document.getElementById("show");
const closeModal = document.getElementById("close");
const container = document.getElementById("container");


showModal.addEventListener('click',function(){
    container.style.display = "flex";
    container.style.opacity = 1;
});

closeModal.addEventListener("click",function(){
    container.style.display = "none";
    container.style.opacity = 0;
});