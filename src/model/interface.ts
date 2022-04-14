export interface INavbar{
    id: number;
    to:string;
    text: string;
}
export interface ICard {
        id: number;
        img: string;
        titolo: string;
        testo: string;
        url: string;
}

export interface ICercaImmagini{
    images: Array <{
        id: string;
        urls: Array <{
            regular: string
        }>
    }>
    query: string;
    isLoading: boolean;
}

export interface IFrase {
    quote: string;
}

export interface IImmagini {
    photos: Array <{
        id: string;
        urls: Array <{
            regular: string
        }>
    }>
    isLoading: boolean;
    modal: boolean;
}

export interface IModal {
    photoId: string;
    modal: boolean;
}

export interface IWrapepr {
    modal: boolean;
}