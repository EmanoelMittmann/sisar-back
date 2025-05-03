import { BaseCrudOperationsContract } from "src/shared/contracts";
import { OrganizationEntity } from "../entities/organization.entity";


export interface IOrganizationRepository extends BaseCrudOperationsContract<OrganizationEntity, OrganizationEntity> {
    findByEmail(email: string): Promise<OrganizationEntity | null>;
}