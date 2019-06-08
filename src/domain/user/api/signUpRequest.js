export const signUp = api => (email, password) =>
  api.client
    .post('user/auth/sign-up', {
      email,
      password
    })
    .then(response => response.data)
