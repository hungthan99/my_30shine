import config from '~/config';

const endows = [
    {
        label: 'ƯU ĐÃI',
        description: 'Quà tặng, chiết khấu đặc biệt cập nhật liên tục',
        items: [
            {
                image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-1.jpg',
                name: 'Combo Giữ nếp X2',
                priceNew: '499.000 ₫',
                priceOld: '618.000 ₫',
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-2.jpg',
                name: 'Combo Giữ nếp X2',
                priceNew: '399.000 ₫',
                priceOld: '488.000 ₫',
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-3.jpg',
                name: 'Combo Tóc bồng bềnh Giữ nếp nhẹ tênh',
                priceNew: '459.000 ₫',
                priceOld: '498.000 ₫',
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/uu-dai-trang-chu/combo-web-4.jpg',
                name: 'Combo Tóc bồng bềnh Giữ nếp nhẹ tênh',
                priceNew: '499.000 ₫',
                priceOld: '558.000 ₫',
            },
        ],
    },
    {
        label: 'AN TÂM & TIN TƯỞNG',
        description: 'Thấu hiểu nhu cầu, hỗ trợ nhiệt tình',
        items: [
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_attt_1.png',
                name: 'Những câu hỏi thường gặp',
                to: config.routes.question,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_attt_2.png',
                name: 'Group chia sẻ feedback dịch vụ',
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_attt_3.png',
                name: 'Nói gì để có kiểu tóc ưng ý',
                to: config.routes.cosmetics,
            },
            {
                image: 'https://storage.30shine.com/web/v4/images/pc/pc_attt_6.png',
                name: 'Sửa tóc tại nhà trong 2h',
            },
        ],
    },
];

export default endows;
