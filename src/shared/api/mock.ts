import { IPost, IPostCategory, IPostFilter } from "@/entities/post";
import { IUser } from "@/entities/user";

export const USER_DATA: IUser = {
    name: "Иван",
    surname: "Иванов",
    patronymic: "Иванович",
    age: 27,
    phone: "89999999999"
};

export const POSTS_DATA: IPost[] = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        category: {
            id: 2,
            title: "NFT",
            value: "nft"
        },
        readTime: 10
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit " +
            "amet, consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing " +
            "elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem " +
            "ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit amet, " +
            "consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing " +
            "elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem " +
            "ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit amet, " +
            "consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing " +
            "elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel?",
        category: {
            id: 1,
            title: "Люди",
            value: "people"
        },
        readTime: 5
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit " +
            "amet, consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing " +
            "elit. Unde, vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem " +
            "ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel? Lorem ipsum dolor sit amet",
        category: {
            id: 3,
            title: "Блокчейн",
            value: "blockchain"
        },
        readTime: 15
    }
];

export const CATEGORIES_DATA: IPostCategory[] = [
    {
        id: 1,
        title: "Люди",
        value: "people"
    },
    {
        id: 2,
        title: "NFT",
        value: "nft"
    },
    {
        id: 3,
        title: "Блокчейн",
        value: "blockchain"
    },
    {
        id: 4,
        title: "Криптовалюта",
        value: "crypto"
    },
    {
        id: 5,
        title: "Инженерия",
        value: "engineering"
    }
];

export const FILTERS_DATA: IPostFilter[] = [
    {
        id: 0,
        title: "Все",
        value: "all"
    },
    {
        id: 1,
        title: "Люди",
        value: "people"
    },
    {
        id: 2,
        title: "NFT",
        value: "nft"
    },
    {
        id: 3,
        title: "Блокчейн",
        value: "blockchain"
    },
    {
        id: 4,
        title: "Криптовалюта",
        value: "crypto"
    },
    {
        id: 5,
        title: "Инженерия",
        value: "engineering"
    }
];
