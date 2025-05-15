import { IChargeRequiredInput } from "./charge.contract"
import { ISignatureRequiredInput } from "./signature.contract"

export interface IAbstractGatewayRepository {
    /**
     * Create a customer in Asaas
     * @param name - The name of the customer
     * @param cpf - The cpf of the customer without mask
     * @returns The customer uuid
     */
    create_customer(name: string, cpf: string): Promise<any>
    /**
     * Find a customer by uuid
     * @param uuid - The uuid of the customer
     * @returns The customer
     */
    find_by_uuid_customer(uuid: string): Promise<any>
    /**
     * Create a charge in Asaas
     * @param data - The data of the charge
     * @param value - should be a integer
     * @returns The charge created
     */
    create_charge(data: IChargeRequiredInput): Promise<any>
    /**
     * Delete a charge by uuid
     * @param uuid - The uuid of the charge
     * @returns The charge deleted
     */
    delete_charge(uuid: string): Promise<any>
    /**
     * Create a signature required in Asaas
     * @param data - The data of the signature required
     * @returns The signature required created
     */
    create_signature(data: ISignatureRequiredInput): Promise<any>
    /**
     * Delete a signature by uuid
     * @param uuid - The uuid of the signature
     * @returns The signature deleted
     */
    delete_signature(uuid: string): Promise<any>
    /**
     * Update a signature by uuid
     * @param uuid - The uuid of the signature
     * @param data - The data of the signature
     * @returns The signature updated
     */
    update_signature(uuid: string, data: ISignatureRequiredInput): Promise<any>
}