import { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common"

export const UseAuthUser = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
})