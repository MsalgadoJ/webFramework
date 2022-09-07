import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Capi', age: 31 });

const userForm = new UserForm(document.getElementById('root')!, user); // Assert that e is non-null and access name;

userForm.render();
