import { IResponseUserData, IUser, IUserData } from "../types/types";

export const AuthService = {
    async registration(): Promise<IResponseUserData | undefined> {
        return {
            token: "mocked-jwt-token",
            user: {
                email: "teste@email.com",
                password: "SenhaMuitoDificil123@",
                id: 1,
                createdAt: "2024-07-21T15:15:31.239Z",
                updatedAt: "2024-07-21T15:15:31.239Z"
            }
        };
    },

    async login(): Promise<IUser | undefined> {
        return {
            email: "teste@email.com",
            token: "mocked-jwt-token",
            id: 1
        };
    },

    async getProfile(): Promise<IUser | undefined> {
        return {
            email: "teste@email.com",
            token: "mocked-jwt-token",
            id: 1
        };
    },
}