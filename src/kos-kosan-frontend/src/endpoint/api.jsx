import { kos_kosan_backend } from 'declarations/kos-kosan-backend';

const Api = {
  login: async (uCred, uPass) => {
    try {
      const res = await kos_kosan_backend.login(uCred, uPass);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default Api;