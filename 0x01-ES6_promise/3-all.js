import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then(([user, upload]) => console.log(upload.body, Object.values(user).join(' ')))
    .catch(() => console.log('Signup system offline'));
}
