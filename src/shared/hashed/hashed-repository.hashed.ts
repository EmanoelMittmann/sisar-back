import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IHashedRepository } from '../contracts/hash.contract';


@Injectable()
export class HashedRepository implements IHashedRepository {
    async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}