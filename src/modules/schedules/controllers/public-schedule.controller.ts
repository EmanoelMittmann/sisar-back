import { Controller, NotImplementedException, Param, Patch } from "@nestjs/common";
import { ListAllService } from "src/modules/plans/services/list-all-service.service";


@Controller('public/schedules')
export class PublicScheduleController {
    constructor(
    ) { }

    @Patch("/:uuid")
    async toPublicSchedule(@Param("uuid") organization_uuid: string) {
        throw new NotImplementedException()
    }
}