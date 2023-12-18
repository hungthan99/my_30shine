import config from '~/config';

const commits = [
    {
        label: 'CAM KẾT 30SHINE CARE',
        description: 'Sự hài lòng của anh là ưu tiên hàng đầu của 30Shine',
        banner: 'https://storage.30shine.com/web/v4/images/pc/pc_goi_co_vai_gay_banner.png',
        alternative: 'Banner commit',
        titleBanner: 'VÌ CHẤT LƯỢNG PHỤC VỤ LÀ HÀNG ĐẦU',
        descBanner: 'Áp dụng tại salon bất kỳ toàn hệ thống 30Shine',
        to: config.routes.shineCare,
        items: [
            {
                days: '30',
                unit: 'ngày',
                slogan: 'Đổi/trả hàng miễn phí',
            },
            {
                days: '07',
                unit: 'ngày',
                slogan: 'Bảo hành tóc miễn phí',
            },
        ],
    },
];

export default commits;
