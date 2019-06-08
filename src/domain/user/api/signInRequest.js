export const signIn = api => (email, password) =>
  api.client
    .post('user/auth/sign-in', {
      email,
      password
    })
    .then(response => response.data)
