export interface IArgumentsFetch {
    username: string
}

export interface IArgumentsRetrieve {
    location?: string
    language?: string
}

export interface IReposGithub {
    languages_url: string
}

export interface IUserDetails {
    id: number
	name: string
    login: string
	location: string
	email: string
	twitterUserName: string
	languages: string[]
}