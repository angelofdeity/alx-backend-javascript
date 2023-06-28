import { createUser, uploadPhoto } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const user = await createUser();
    const upload = await uploadPhoto();
    console.log(upload.body, Object.values(user).join(' '));
  } catch {
    console.log('Signup system offline');
  }
}
