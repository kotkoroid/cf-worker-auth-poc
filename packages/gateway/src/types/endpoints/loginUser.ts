export interface LoginUserRequest {
	username: string
  email: string
	password: string
}

export interface LoginUserResponse {
  token: string
}
