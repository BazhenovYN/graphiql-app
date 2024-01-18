export const createFetchResponse = (data = {}) => {
  return { json: () => Promise.resolve(data) };
};
