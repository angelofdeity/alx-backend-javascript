import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  try {
    Promise.all([createUser(), uploadPhoto()]).then(([user, upload]) => console.log(upload.body, user.firstName, user.lastName));
  } catch (error) {
    console.log('Signup system offline');
  }
}
handleProfileSignup();
