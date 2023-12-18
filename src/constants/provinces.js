import config from '~/config';

const provinces = [
    {
        label: 'TÌM 30SHINE GẦN NHẤT',
        description: 'Để xe thuận tiện an toàn, bản đồ dẫn đường chi tiết (hàng trăm Salon)',
        items: [
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_map_hn.png',
                name: 'Hà Nội',
                quantity: '20+ Salon',
                to: config.routes.haNoiProvince,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_map_hcm.png',
                name: 'TP. Hồ Chí Minh',
                quantity: '50+ Salon',
                to: config.routes.hoChiMinhProvince,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_map_dn.png',
                name: 'Đà Nẵng',
                quantity: '2+ Salon',
                to: config.routes.daNangProvince,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_map_other.png',
                name: 'Các Thành phố khác',
                quantity: '20+ Salon',
                to: config.routes.systemSalon,
                others: true,
            },
        ],
    },
];

export default provinces;
