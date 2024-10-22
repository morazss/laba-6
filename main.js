fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);  

            const tableBody = document.getElementById('useri');

            data.forEach(user => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = user.name;

                const emailCell = document.createElement('td');
                emailCell.textContent = user.email;

                row.appendChild(nameCell);
                row.appendChild(emailCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Ошибка:', error));