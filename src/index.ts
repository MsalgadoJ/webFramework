import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'Capi', age: 31 });

const userEdit = new UserEdit(document.getElementById('root')!, user); // Assert that the selector is non-null

userEdit.render();
