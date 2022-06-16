export interface ISettingLink {
    name: string;
    id: number;
    path: string;
    icon: string;
}

const settingLinks: ISettingLink[] = [
    {
        id: 1,
        name: "Profile",
        path: "/settings/profile",
        icon: "/icons/profile.png",
    },
    {
        id: 2,
        name: "Account",
        path: "/settings/account",
        icon: "/icons/seed.png",
    },
];

export default settingLinks;
