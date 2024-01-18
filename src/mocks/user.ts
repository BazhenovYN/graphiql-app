import { User } from 'firebase/auth';

export const mockUser: User = {
  uid: 'kfFBOUt7wPUB1YB0W1AFR2ArFny1',
  email: 'test@mail.ru',
  emailVerified: false,
  isAnonymous: false,
  providerData: [
    {
      providerId: 'password',
      uid: 'test@mail.ru',
      displayName: null,
      email: 'test@mail.ru',
      phoneNumber: null,
      photoURL: null,
    },
  ],
  refreshToken:
    'AMf-vBzIzrL4vZz2NnDuvisDI5088tlnNeBn5pLMsTMLADVvEkhO_nG4aZXILp4Nwhov_RC4sdYiaDc26DkWv8OGTI6QJqrnzJWW6FH9vICPzA-K-27jV37gYvP-U7jMQjRPwiceuUQvp0zHZSBBEKamHw1BagBZFSJxy09cKBa0EVV7bdZX5xNXmryaZ0h2Hx4L8ZFFrQu2',
  metadata: {
    creationTime: '1702835782095',
    lastSignInTime: '1702835782095',
  },
  tenantId: '',
  delete: vi.fn(),
  getIdToken: vi.fn(),
  getIdTokenResult: vi.fn(),
  reload: vi.fn(),
  toJSON: vi.fn(),
  displayName: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
};
