//heart image color change
const colorChange = document.getElementById("heart").addEventListener('click',
    function () {
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-regular')
        this.style.color = this.classList.contains('fa-solid') ? 'red' : "";
    }
)