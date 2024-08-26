import { User } from '../model/User'

export class ListUserService {
  constructor() {}

  public static execute() {
    const user = new User();

    return user.get();
  }
}
