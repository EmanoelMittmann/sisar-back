import { Role_Control } from '../enum/role.enum';

export interface JwtDataContract {
  sub: string; // Subject - usually the user UUID
  username: string;
  image: string | null; // Image path or URL, can be null if not set
  role: Role_Control;
  expired_at: number; // Expiration time in seconds
}
