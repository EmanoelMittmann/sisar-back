import { JwtModule } from "@nestjs/jwt"
import { Test } from "@nestjs/testing"
import { randomUUID } from "crypto"
import { GenerateTokenService } from "src/modules/auth/services/generate-token.service"
import { UserEntity } from "src/modules/users"
import { Role_Control } from "src/shared/enum/role.enum"


describe("Should be able test generate token", () => {
    let generateTokenService: GenerateTokenService

    beforeEach(async () => {
        const authModule = await Test.createTestingModule({
            imports: [
                JwtModule.register({
                    secret: '123456789'
                })
            ],
            providers: [
                GenerateTokenService
            ]
        }).compile()
        generateTokenService = authModule.get<GenerateTokenService>(GenerateTokenService)
    })

    it("class should be defined", async () => {
        expect(generateTokenService).toBeDefined()
    })

    it("Should be able generate token", async () => {
        const entity = new UserEntity()
        entity.setId(1)
        entity.setUuid(randomUUID())
        entity.setName('Teste')
        entity.setEmail('teste@gmail.com')
        entity.setPassword('123456')
        entity.setRole(Role_Control.USER)

        const result = await generateTokenService.execute(entity)

        expect(result).toEqual(expect.any(String))
    })


})  