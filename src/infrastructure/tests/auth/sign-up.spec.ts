import { BadRequestException } from "@nestjs/common"
import { Test } from "@nestjs/testing"
import { UserInMemoryRepository } from "src/infrastructure/in_memory/user/repository"
import { SignUpService } from "src/modules/auth/services/sign-up.service"
import { UserEntity } from "src/modules/users"
import { HashedModule } from "src/shared/hashed/hashed.module"


describe("Should be able test sign up", () => {
    let userRepository: UserInMemoryRepository
    let signUpService: SignUpService

    beforeEach(async () => {
        const authModule = await Test.createTestingModule({
            imports: [
                HashedModule
            ],
            providers: [
                {
                    provide: 'IUserRepository',
                    useClass: UserInMemoryRepository
                },
                SignUpService
            ]
        }).compile()
        signUpService = authModule.get<SignUpService>(SignUpService)
        userRepository = authModule.get<UserInMemoryRepository>('IUserRepository')
    })

    it("Should be able sign up", async () => {
        expect(signUpService).toBeDefined()
    })

    it("Shouldn't be able sign up with invalid email", async () => {
        const entity = new UserEntity()
        entity.setEmail('teste')

        userRepository.users.push(entity)

        await expect(signUpService.execute(entity)).rejects.toThrow(BadRequestException)
    })

    it("Should be able create user", async () => {
        const entity = new UserEntity()
        entity.setEmail('teste@gmail.com')
        entity.setPassword('123456')
        entity.setName('Teste')

        const result = await signUpService.execute(entity)

        expect(result).toBeTruthy()
    })
})  