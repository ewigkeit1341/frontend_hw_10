//Решить следующие задачи:
// 1/ Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// 3.Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// 4. Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.

const form = document.querySelector(".user_form");
const users = [];

function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `<p>${user.firstName} ${user.lastName} Age: ${user.age}</p>`;
    return card;

    }

    function renderUserCards() {
        const container = document.getElementById('userContainer');
        container.innerHTML = '';
    
        users.forEach(user => {
            const card = createUserCard(user);
            container.appendChild(card); 
        });


    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.querySelector(".first_name").value;
        const lastName = document.querySelector(".last_name").value;
        const age = document.querySelector(".age").value;

        console.log(`First name: ${firstName}`);
        console.log(`Last name: ${lastName}`);
        console.log(`Age: ${age}`);


        const user = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
            users.push(user);
            console.log(users);
            form.reset();
    });
 }