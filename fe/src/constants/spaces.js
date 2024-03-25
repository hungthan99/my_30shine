import config from '~/config';

const spaces = [
    {
        label: 'KHÔNG GIAN & CÔNG NGHỆ',
        description: 'Trải nghiệm không gian mở',
        banner: 'https://storage.30shine.com/web/v4/images/pc/pc_kgcn_banner.png',
        alternative: 'Space banner',
        descBanner:
            'Vượt qua giới hạn của tiệm tóc truyền thống, 30Shine tạo dựng không gian trải nghiệm hoàn toàn mới với trang thiết bị công nghệ hiện đại',
        items: [
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_kgcc_1.png',
                name: 'Salon rộng dễ tìm',
                to: config.routes.primeLocation,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_kgcc_2.png',
                name: 'Công nghệ hiện đại',
                to: config.routes.modernEquipment,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_kgcc_3.png',
                name: 'Làm chủ thời gian',
                to: config.routes.masterTime,
            },
        ],
    },
];

export default spaces;
