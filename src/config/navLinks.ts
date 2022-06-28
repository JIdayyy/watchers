import { Role } from "src/generated/graphql";

export interface INavLink {
    name: string;
    id: number;
    role: Role | "ALL";
    icon: string;
    path: string;
}

const navLinks: INavLink[] = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: "/icons/home.png",
        role: "ALL",
    },
    {
        id: 2,
        name: "Categories",
        path: "/categories",
        icon: "/icons/categories.png",
        role: "ALL",
    },
    {
        id: 3,
        name: "My Posts",
        path: "/myposts",
        icon: "/icons/posts.png",
        role: "ALL",
    },
    {
        id: 4,
        name: "Admin",
        path: "/admin",
        icon: "/icons/admin.png",
        role: Role.Admin,
    },
    {
        id: 5,
        name: "My Profile",
        path: "/settings/profile",
        icon: "/icons/profile.png",
        role: Role.User,
    },
];
export default navLinks;
