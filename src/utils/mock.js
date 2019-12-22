import { users } from '../store/mock/users';

const delay = (timeout = 1000) => new Promise((resolve) => setTimeout(resolve, timeout));
const respondWith = (response, timeout) => () => delay(timeout).then(() => {
    console.log("response", response);
    return response;
});

export default {
    mockUsers: respondWith(users)
}
