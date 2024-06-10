const category = {

    rifles: 'Винтовки',
    aim_rifles: 'Снайперские винтовки',
    shotgun: 'Дробовики',
    gun: 'Пистолеты',
    aim: 'Оптика',
    ammo: 'Патроны',
    equipment: 'Экипировка',
    clothes: 'Одежда',
}

const cardsData = [
    {
        id: 1,
        title: 'M4A1',
        description: 'Винтовка',
        county: 'США',
        category: category.rifles,
        cost: 66638
    },
    {
        id: 2,
        title: 'FN SCAR',
        description: 'Винтовка',
        county: 'США',
        category: category.rifles,
        cost: 156750
    },
    {
        id: 3,
        title: 'Glock-18',
        description: 'Пистолет',
        county: 'Австрия',
        category: category.gun,
        cost: 46738
    },
    {
        id: 4,
        title: 'Remington Model 870',
        description: 'Дробовик',
        county: 'США',
        category: category.shotgun,
        cost: 67850
    },
    {
        id: 5,
        title: 'NS433-3',
        description: 'Оптика',
        county: 'США',
        category: category.aim,
        cost: 6900
    },
    {
        id: 6,
        title: '300 Aac Blackout',
        description: 'Патроны',
        county: 'Великобритания',
        category: category.ammo,
        cost: 900
    },

    {
        id: 7,
        title: 'Хранитель',
        description: 'Бронежилет',
        county: 'Россия',
        category: category.equipment,
        cost: 17800
    },

    {
        id: 8,
        title: 'Куртка',
        description: 'Одежда',
        params: {
            size: 'S L',
            color: 'Мультикам'
        },
        county: 'Россия',
        category: category.rifles,
        cost: 2499
    },
]