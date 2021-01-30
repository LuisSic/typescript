import { View } from './Views';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
       <div>
         <h1>Use Detail</h1>
         <div>User Name: ${this.model.get('name')}</div>
         <div>User Age: ${this.model.get('age')}</div>
       </div>
    `;
  }
}
