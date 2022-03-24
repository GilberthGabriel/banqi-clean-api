export interface IUseCase {
  perform(data: any): Promise<any>;
}
