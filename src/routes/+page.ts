import { User } from 'src/models/user';

export type PageData = {
	user?: User;
};

export const load = async (): Promise<PageData> => {
	return {
		user: new User('abcd1234', 'John Smith')
	};
};
