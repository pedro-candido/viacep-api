import { Request, Response } from 'express';

export interface IPostAddressController {
  handle: (req: Request, res: Response) => Promise<any>;
}
