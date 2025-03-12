type NavLink = {
    href: string;
    label: string;
}

export const links: NavLink[] = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/products', label: 'Products'},
    {href: '/favorites', label: 'Favorites'},
    {href: '/cart', label: 'cart'},
    {href: '/orders', label: 'orders'},
]