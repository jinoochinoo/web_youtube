import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "MAIN",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "TABLE TEMPLATE",
        icon: <CiBoxes />,
        src: "/tableTemplate"
    },
    {
        title: "CARD TEMPLATE",
        icon: <CiBullhorn />,
        src: "/cardTemplate"
    },
    {
        title: "무제1",
        icon: <CiMoneyBill />,
        src: "/not"
    },
    {
        title: "무제2",
        icon: <CiCoins1 />,
        src: "/not"
    },
    {
        title: "무제3",
        icon: <CiMoneyBill />,
        src: "/not"
    },
    {
        title: "권지용 무제",
        icon: <CiCoins1 />,
        src: "/not"
    },
];

export const searchKeyword = [
    {
        title: "대머리도적",
        src: "/search/대머리도적"
    },
    {
        title: "김데데",
        src: "/search/김데데"
    },
    {
        title: "바람의나라 클래식",
        src: "/search/바람의나라 클래식"
    },
    {
        title: "모아재 바람",
        src: "/search/모아재 바람"
    },
    {
        title: "메랜",
        src: "/search/메랜"
    },
    {
        title: "30대 탈모",
        src: "/search/30대 탈모"
    },
    {
        title: "개발자 수명",
        src: "/search/개발자 수명"
    },
    {
        title: "외머생",
        src: "/search/외머생"
    },
    {
        title: "송정 서핑",
        src: "/search/송정 서핑"
    },
    {
        title: "서프홀릭",
        src: "/search/서프홀릭"
    },
    {
        title: "투니버스 노래모음",
        src: "/search/투니버스 노래모음"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/",
        icon: <AiOutlineInstagram />
    },
]