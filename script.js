//heart image color change and value increment
let value = 0;
let copyCount = 0;

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

//COPY button functionality:
const copyButtons = document.getElementsByClassName("copy-btn")
for (let copyBtn of copyButtons) {
    copyBtn.addEventListener('click',
        function () {
            const navCopy = document.getElementById("nav-copy");
            copyCount++;
            navCopy.innerText = copyCount;
        }
    )
}
/////

//Click on Card and 20 coins will reduce.
const cards = document.getElementsByClassName('card-selection');

for (let card of cards) {
    card.addEventListener('click',
        function () {
            // declare first
            const coinValue = document.getElementById('coin-value');

            //validation
            if (coinValue.innerText <= 0) {
                alert("Your coin limit is finished");
                return;
            }

            //coin value deduction:
            coinValue.innerText = parseInt(coinValue.innerText) - 20;

            // targeted clicked card alert
            const clickCard = this.closest(".card");
            const name = clickCard.querySelector(".service-type").innerText;
            const number = clickCard.querySelector(".service-number").innerText;

            // Allow browser to update UI before showing alert
            setTimeout(() => {
                alert(`Calling ${name}\nNumber: ${number}`);
            }, 0);

        }
    );
}