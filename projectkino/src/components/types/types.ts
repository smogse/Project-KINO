import { Themes } from "../constants/theme"

type ThemeState = {
    theme: Themes
}

type StoreState = {
    theme: ThemeState,
    user: UserState,
}

type User = {
    id?: number,
    email: string,
    username?: string,
    password: string
}

type JwtResponse = {
    access: string,
    refresh: string
}

type UserState = {
    user: User | null
}

export type {
    ThemeState,
    StoreState,
    User,
    JwtResponse,
    UserState
};