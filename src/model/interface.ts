interface INavbar {
    isActive: boolean;
    menu: string[];
}

interface ICard {
    cards: Array<{
        id: number;
        img: string;
        titolo: string;
        testo: string;
        url: string;
    }>
}

interface ICercaImmagini{
    images: Array <{
        id: string;
        urls: Array <{
            regular: string
        }>
    }>
    query: string;
    isLoading: boolean;
}

interface IFrase {
    quote: string;
}

interface IImmagini {
    photos: Array <{
        id: string;
        urls: Array <{
            regular: string
        }>
    }>
    isLoading: boolean;
    modal: boolean;
}

interface IModal {
    photoId: string;
    modal: boolean;
}

interface IWrapepr {
    modal: boolean;
}