export interface BaseCrudOperationsContract<I, O> {
  create(args: I): Promise<O>;
  findAll(args: I): Promise<O[]>;
  findOne(args: I): Promise<O | null>;
  update(args: I): Promise<O>;
  delete(args: I): Promise<O>;
}
