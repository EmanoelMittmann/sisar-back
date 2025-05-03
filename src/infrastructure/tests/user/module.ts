import { Test } from "@nestjs/testing"
import { UserInMemoryRepository } from "src/infrastructure/in_memory/user/repository"
import { FindUserByIdService } from "src/modules/users/services/find-user-by-id.service"

export const userModuleMocked = async () => {
    return Test.createTestingModule({
        providers: [
            {
                provide: 'IUserRepository',
                useClass: UserInMemoryRepository
            },
            FindUserByIdService
        ],
        exports: [
            'IUserRepository',
        ]
    }).compile()
}