const home = [
    {
        path: 'home',
        name: 'home',
        component: () => import('../../pages/home/index.vue'),
        children: [
            {
                path: 'recommend',
                name: 'recommend',
                component: () => import('../../components/home/viwes/recommend/index.vue')
            },
            {
                path: 'topSpeed',
                name: 'topSpeed',
                component: () => import('../../components/home/viwes/top-speed/index.vue')
            },
            {
                path: 'infantMom',
                name: 'infantMom',
                component: () => import('../../components/home/viwes/infant-mom/index.vue')
            },
            {
                path: 'Luxurious',
                name: 'Luxurious',
                component: () => import('../../components/home/viwes/luxurious/index.vue')
            },
            {
                path: 'FamousBrandSale',
                name: 'FamousBrandSale',
                component: () => import('../../components/home/viwes/famous-brand-sale/index.vue')
            },
        ]
    }
]

export default home