import { Request, Response } from 'express';

export interface IGetAddressController {
  handle: (req: Request, res: Response) => Promise<Response>;
}
