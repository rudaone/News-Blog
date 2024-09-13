export enum THEMES {
    DARK = 'dark',
    LIGHT = 'light'
}

export interface IArticle {
    id: number,
    title: string,
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    updated_at: string,
    featured: boolean,
    launches?: [],
    events?: []
}

export interface ISelectedPage{
    id: number,
    title: string,
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    updated_at: string,
    featured: boolean,
    launches?: [],
    events?: []
}
export interface IBlog {
    id: number,
    title: string,
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    updated_at: string,
    featured: boolean,
    launches?: [],
    events?: []
}

export interface IUIState {
    theme: THEMES
}


export interface IArticleState {
    articles: IArticle[],
    limit: number,
    currentPage: number,
    selectedPage: ISelectedPage,

}
export interface IBlogState {
    blogs: IBlog[],
    limit: number,
    currentPage: number,
}

export interface IArticleInfo {
    limit: number,
    currentPage?: number,
    search?: string | null,
}

export interface IBlogInfo {
    limit: number,
    currentPage: number,

}

export interface IArticleResponse {
    count: number,
    results: IArticle[],
}

export interface IBlogResponse {
    count: number,
    results: IBlog[],
}

export interface IStoreState {
    articles: IArticleState,
    blogs: IBlogState,
    limit: number,
    user: IUserState
}


export interface ISignUp {
    username: string,
    email: string,
    password: string,
    course_group?: number
}

export interface IUser {
    username: string,
    id: number,
    email: string
}

export interface IUserState {
    user: IUser
}

export interface IActivationInfo {
    uid: string,
    token: string
}

export interface ISignIn {
    email: string,
    password: string
}


