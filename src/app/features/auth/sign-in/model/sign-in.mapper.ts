import { ISignInResponse } from './sign-in.types';

export const signInMapper = {
  mapToSignInResponse: (data: any): ISignInResponse => {
    return {
      token: data?.token || '',
      username: data?.username || '',
      userId: data?.user_id || null,
    };
  },
};
