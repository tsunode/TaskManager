declare namespace Express {
    export interface Request {
      user: {
        id: string;
        roleId?: string;
      };
    }
  }
  