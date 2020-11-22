export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  surname: string;
  roles: number[];
  permissions: any[];
  phone: string;

  accessToken: string;
  refreshToken: string;

  clear(): void {
    this.id = undefined;
    this.username = '';
    this.password = '';
    this.email = '';
    this.roles = [];
    this.permissions = [];
    this.accessToken = 'access-token-' + Math.random();
    this.refreshToken = 'access-token-' + Math.random();
    this.phone = '';
    this.name = '';
    this.surname = '';
  }
}

