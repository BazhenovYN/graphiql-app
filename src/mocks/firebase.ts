const mockCreateUserWithEmailAndPassword = vi.fn(() =>
  Promise.resolve('mockCreateUserWithEmailAndPassword result')
);
const mockSignInWithEmailAndPassword = vi.fn(() =>
  Promise.resolve('mockSignInWithEmailAndPassword result')
);

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => Promise.resolve(true)),
  createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
}));
