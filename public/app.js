// public/app.js
document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { platform: 'WazirX', last: '₹25,72,612', buy: '₹25,72,610', sell: '₹25,72,612', difference: '-3.14%', savings: '₹83,498', savingsClass: 'negative' },
        { platform: 'Bitbns', last: '₹28,83,906', buy: '₹28,55,164', sell: '₹28,82,157', difference: '8.58%', savings: '₹2,27,396', savingsClass: '' },
        { platform: 'Colodax', last: '₹25,45,035', buy: '₹25,33,304', sell: '₹28,51,559', difference: '0%', savings: '₹0', savingsClass: '' },
        { platform: 'Zebpay', last: '₹26,50,000', buy: '₹26,49,999', sell: '₹26,21,000', difference: '-0.23%', savings: '₹-72,495', savingsClass: 'negative' },
    ];

    const tbody = document.querySelector('#crypto-table tbody');
    tbody.innerHTML = '';
    data.forEach((crypto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${crypto.platform}</td>
            <td>${crypto.last}</td>
            <td>${crypto.buy}/${crypto.sell}</td>
            <td class="${crypto.savingsClass}">${crypto.difference}</td>
            <td class="${crypto.savingsClass}">${crypto.savings}</td>
        `;
        tbody.appendChild(row);
    });
});

const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
});

document.getElementById('buy-button').addEventListener('click', () => {
    window.location.href = 'https://example.com/buy';
});

// Timer functionality
let timer = 60;
const timerElement = document.getElementById('timer');

function startTimer() {
    setInterval(() => {
        if (timer > 0) {
            timer--;
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            timer = 60;
        }
    }, 1000);
}

startTimer();
