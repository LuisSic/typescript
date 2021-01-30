import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Name', age: 20 });
const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}
const userForm = new UserEdit(root, user);

userForm.render();
