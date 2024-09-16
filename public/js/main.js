// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/api/getTop10')
//         .then(response => response.json())
//         .then(data => {
//             const tableBody = document.querySelector('#crypto-table tbody');
//             tableBody.innerHTML = '';
//             data.forEach(item => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${item.name}</td>
//                     <td>${item.last}</td>
//                     <td>${item.buy}</td>
//                     <td>${item.sell}</td>
//                     <td>${item.volume}</td>
//                     <td>${item.base_unit}</td>
//                 `;
//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/api/getTop10')
//         .then(response => response.json())
//         .then(data => {
//             const tableBody = document.querySelector('#crypto-table tbody');
//             tableBody.innerHTML = '';
//             data.forEach(item => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${item.name}</td>
//                     <td>${item.last}</td>
//                     <td>${item.buy}</td>
//                     <td>${item.sell}</td>
//                     <td>${item.volume}</td>
//                     <td>${item.base_unit}</td>
//                 `;
//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/api/getTop10')
//         .then(response => response.json())
//         .then(data => {
//             const tableBody = document.querySelector('#crypto-table tbody');
//             tableBody.innerHTML = '';
//             data.forEach(item => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${item.name}</td>
//                     <td>${item.last}</td>
//                     <td>${item.buy}</td>
//                     <td>${item.sell}</td>
//                     <td>${item.volume}</td>
//                     <td>${item.base_unit}</td>
//                 `;
//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });


document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/getTop10')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#crypto-table tbody');
            tableBody.innerHTML = '';
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.last}</td>
                    <td>${item.buy}</td>
                    <td>${item.sell}</td>
                    <td>${item.volume}</td>
                    <td>${item.base_unit}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
