//heart image color change and value increment
let value = 0;

const heartIcons = document.getElementsByClassName('heart');

for (let heartIcon of heartIcons) {
    heartIcon.addEventListener('click',
        function () {
            this.classList.toggle('fa-solid');
            this.classList.toggle('fa-regular');
            this.style.color = this.classList.contains('fa-solid') ? 'red' : "";

            const heartAdd = document.getElementById("heart-add");
            value++;
            heartAdd.innerText = value
        }
    )
}


//Click on Card and 20 coins will reduce.
const cards = document.getElementsByClassName('card-selection');

for (let card of cards) {
    card.addEventListener('click',
        function () {

            // ONLY this clicked card alert
            const card = this.closest(".card");

            const name = card.querySelector(".service-type").innerText;
            const number = card.querySelector(".service-number").innerText;

            alert(`Calling ${name}\nNumber: ${number}`);


            const coinValue = document.getElementById('coin-value');
            //validation
            if (coinValue.innerText <= 0) {
                alert("Your coin limit is finished");
                return;
            }
            coinValue.innerText = parseInt(coinValue.innerText) - 20;
        }
    );
}