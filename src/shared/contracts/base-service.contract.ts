/*
    @ I = Input
    @ O = Output
*/

export interface BaseService<I, O> {
  execute(args: I): Promise<O>;
}
