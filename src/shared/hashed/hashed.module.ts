import { Global, Module } from "@nestjs/common";
import { HashedRepository } from "./hashed-repository.hashed";

@Global()
@Module({
    providers: [
        {
            provide: 'IHashedRepository',
            useClass: HashedRepository,
        }
    ],
    exports: [
        'IHashedRepository',
    ]
})
export class HashedModule { }