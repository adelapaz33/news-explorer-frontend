// eslint-disable-next-line no-unused-vars
export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};
// eslint-disable-next-line no-unused-vars
export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Alison", email: "hello@gmail.com", _id: "fake-id" },
    });
  });
};
