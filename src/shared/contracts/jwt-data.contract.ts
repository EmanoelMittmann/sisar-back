import { Role_Control } from '../enum/role.enum';

export interface JwtDataContract {
  sub: string; // Subject - usually the user UUID
  username: string;
  role: Role_Control;
  expired_at: number; // Expiration time in seconds
}
