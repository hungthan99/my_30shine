import config from '~/config';

const services = [
    {
        label: 'DỊCH VỤ TÓC',
        items: [
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_home_toc_1.png',
                title: 'Cắt tóc',
                price: 'Giá từ 70.000đ',
                to: config.routes.cutHairService,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_home_toc_2.png',
                title: 'Uốn định hình',
                price: 'Giá từ 348.000đ',
                to: config.routes.curlHairService,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_home_toc_3.png',
                title: 'Thay đổi màu tóc',
                price: 'Giá từ 199.000đ',
                to: config.routes.dyingHairService,
            },
        ],
    },
    {
        label: 'SPA & RELAX',
        items: [
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_home_spa_1.png',
                title: 'Gội Massage Relax',
                price: 'Giá từ 135.000đ',
                to: config.routes.massageService,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_home_spa_2.png',
                title: 'Chăm sóc da Spa',
                price: 'Giá từ 199.000đ',
                to: config.routes.spaService,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_home_spa_3.png',
                title: 'Lấy ráy tai êm',
                price: 'Giá từ 70.000đ',
                to: config.routes.earwaxService,
            },
        ],
    },
];

export default services;
