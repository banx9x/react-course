import { GrGamepad } from "react-icons/gr";
import action from "../assets/action.png";
import strategy from "../assets/strategy.png";
import rpg from "../assets/rpg.png";

export const menu = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/games",
        label: "All games",
    },
    {
        href: "/browse",
        label: "Browse",
        children: [
            {
                href: "/platforms",
                label: "Platforms",
                icon: GrGamepad,
            },
            {
                href: "/stores",
                label: "Store",
            },
            {
                href: "/collections",
                label: "Collections",
            },
            {
                href: "/reviews",
                label: "Reviews",
            },
            {
                href: "/genres",
                label: "Genres",
            },
            {
                href: "/creators",
                label: "Creators",
            },
            {
                href: "/tags",
                label: "Tags",
            },
            {
                href: "/developers",
                label: "Developers",
            },
            {
                href: "/publishers",
                label: "Publishers",
            },
        ],
    },
    {
        href: "/platforms",
        label: "Platforms",
        children: [
            {
                href: "/platforms/pc",
                label: "PC",
            },
            {
                href: "/platforms/ps4",
                label: "Playstation 4",
            },
            {
                href: "/platforms/xbox-one",
                label: "XBox One",
            },
            {
                href: "/platforms/nintendo-switch",
                label: "Nintendo Switch",
            },
            {
                href: "/platforms/ios",
                label: "iOS",
            },
            {
                href: "/platforms/android",
                label: "Android",
            },
        ],
    },
    {
        href: "/genres",
        label: "Genres",
        children: [
            {
                href: "/genres/action",
                label: "Action",
                icon: action,
            },
            {
                href: "/genres/strategy",
                label: "Strategy",
                icon: strategy,
            },
            {
                href: "/genres/rpg",
                label: "RPG",
                icon: rpg,
            },
            {
                href: "/genres/shooter",
                label: "Shooter",
            },
            {
                href: "/genres/adventure",
                label: "Adventure",
            },
            {
                href: "/genres/puzzle",
                label: "Puzzle",
            },
            {
                href: "/genres/racing",
                label: "Racing",
            },
            {
                href: "/genres/sport",
                label: "Sport",
            },
        ],
    },
];
