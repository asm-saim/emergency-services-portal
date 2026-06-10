//heart image color change and value increment
let value = 0;
const colorChange = document.getElementById("heart").addEventListener('click',
    function () {
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-regular')
        this.style.color = this.classList.contains('fa-solid') ? 'red' : "";

        const heartAdd = document.getElementById('heart-add');
        value++;
        heartAdd.innerText = value;
    }
)

//Click on Card and 20 coins will reduce.
const cards = document.getElementsByClassName('card-selection');

for (let card of cards) {
    card.addEventListener('click',
        function () {

            // calling alert
            const cardItems = document.getElementsByClassName("card-items");
            for (let cardItem of cardItems) {
                const serviceName = cardItem.querySelector('p').innerText;
                const text = cardItem.querySelectorAll('h2');
                const number = text[1].innerText;
                alert(`Calling ${serviceName}\nNumber: ${number}`);
            }


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