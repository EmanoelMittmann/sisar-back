import { IUserRepository } from "src/modules/users/repositories/user.repository"
import { SignInService } from "src/modules/auth/services/sign-in.service"
import { Test } from "@nestjs/testing"
import { UserInMemoryRepository } from "src/infrastructure/in_memory/user/repository"
import { HashedModule } from "src/shared/hashed/hashed.module"
import { UserEntity } from "src/modules/users"
import { UnauthorizedException } from "@nestjs/common"
import { HashedRepository } from "src/shared/hashed/hashed-repository.hashed"
import { IHashedRepository } from "src/shared/contracts/hash.contract"


describe("Should be able test sign in", () => {
    let userRepository: UserInMemoryRepository
    let signInService: SignInService
    let hashedRepository: IHashedRepository

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
                SignInService
            ]
        }).compile()
        signInService = authModule.get<SignInService>(SignInService)
        hashedRepository = authModule.get<IHashedRepository>('IHashedRepository')
        userRepository = authModule.get<UserInMemoryRepository>('IUserRepository')
    })

    it("SignInService should be defined", async () => {
        expect(signInService).toBeDefined()
    })

    it("Should be not able sign in with user not exist in database", async () => {
        const entityErr = new UserEntity()
        entityErr.setEmail('teste@teste.com')
        entityErr.setPassword('123456')
        await expect(signInService.execute(entityErr)).rejects.toThrow(UnauthorizedException)
    })

    it("Should be not able sign in with invalid password", async () => {
        const entityErr = new UserEntity()
        entityErr.setEmail('teste@teste.com')
        entityErr.setPassword(await hashedRepository.hash('123456'))
        userRepository.users.push(entityErr)
        const inputErr = new UserEntity()
        inputErr.setEmail('teste@teste.com')
        inputErr.setPassword('654321')
        await expect(signInService.execute(inputErr)).rejects.toThrow(UnauthorizedException)
    })

    it("Should be able sign in with valid credentials", async () => {
        const entity = new UserEntity()
        entity.setEmail('teste@gmail.com')
        entity.setPassword(await hashedRepository.hash('123456'))
        userRepository.users.push(entity)
        const input = new UserEntity()
        input.setEmail('teste@gmail.com')
        input.setPassword('123456')
        await expect(signInService.execute(input)).resolves.toBeTruthy()
    })


}) 