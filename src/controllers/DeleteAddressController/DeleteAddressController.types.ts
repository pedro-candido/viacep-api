import { Request, Response } from 'express';

export interface IDeletetAddressController {
  handle: (req: Request, res: Response) => Promise<any>;
}
