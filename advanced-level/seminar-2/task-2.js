// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум аккаунте, а некоторые - нет. Ваша задача - создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и `instanceof`.

// 1. Создайте базовый класс `User` с базовой информацией (например, имя и фамилия).
// 2. Создайте классы `PremiumUser` и `RegularUser`, которые наследуются от `User`. Класс `PremiumUser` должен иметь свойство `premiumAccount` (допустим, дата истечения срока действия), а у `RegularUser` такого свойства нет.
// 3. Создайте функцию `getAccountInfo(user)`, которая принимает объект класса `User` и возвращает информацию о наличии и сроке действия премиум аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции `getAccountInfo` используйте `instanceof` для проверки типа переданного пользователя и дайте соответствующий ответ.

class User {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
}


class PremiumUser extends User {
premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
}


// создать RegularUser
class RegularUser extends User {

}

function getAccountInfo(user) {
// Премиум аккаунт действителен до такой-то даты или информация отсутствует
if (user instanceof PremiumUser) {
    return `Premium аккаунт действителен до ${new Date(user.premiumAccount).toLocaleDateString()} ` ?? `Информация о премиум аккаунте отсутствует` ?? `Тип пользователя не определен`
}
// пользователь без премиум аккаунта
else if(user instanceof RegularUser){
    return 'Premium отсутствует'
} else {
// Тип пользователя не определен"
return 'Тип пользователя не определен'
}
}


// Проверка
const user1 = new PremiumUser('Виктор', 'Викторов');
console.log(getAccountInfo(user1));

const user2 = new RegularUser('Виктория', 'Викторова')
console.log(getAccountInfo(user2));

const user3 = new User('Виктория', 'Иванова')
console.log(getAccountInfo(user3));
