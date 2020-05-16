import laptops from './laptop';
import androids from './android';
import cameras from './camera';
import users from './users';

const fakeData = [...users];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;