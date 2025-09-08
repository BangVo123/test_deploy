import type { PricingContentType } from '@/components/ui/Table';

const pricingContent: PricingContentType[] = [
  {
    decoratorUrl: '/assets/images/pricing/decorator_1.png',
    tableColor: '#EC6277',
    header: 'GÓI COMBO (MUA TRỌN BỘ THIẾT BỊ + KHOÁ HỌC)',
    tableHeader: ['Tên gói', 'Thời gian', 'Giá bán(VNĐ)', 'Ghi chú'],
    tableBody: [
      ['Gói 6 tháng', '6 tháng', '3.390.000', 'Thiết bị + App 6 tháng'],
      ['Gói 12 tháng', '12 tháng', '4.490.000', 'Tặng 1 tháng sử dụng'],
    ],
    colsWidth: ['w-2/9', 'w-2/9', 'w-2/9', 'w-3/9'],
    notes: [
      'Quà tặng kèm: Thiết bị học tập chuyên dụng + bút cảm ứng.',
      'Không phát sinh chi phí trong thời gian sử dụng gói.',
    ],
  },
  {
    decoratorUrl: '/assets/images/pricing/decorator_2.png',
    tableColor: '#6FC3CF',
    header: 'CHO THUÊ THIẾT BỊ + TRẢ GÓP HỌC PHÍ',
    tableHeader: ['Loại chi phí', 'Chi tiết'],
    tableBody: [
      ['Trả trước', '490.000 VND (giao hàng) + 500.000 VND đặt cọc hoàn'],
      ['Trả hàng tháng', '299.000 VND / tháng × 12 tháng'],
      ['Tổng cả năm', '~4.000.000 VND'],
      ['Ghi chú thêm', 'Có thể chuộc thiết bị sau năm 1'],
    ],
    colsWidth: ['w-2/5', 'w-3/5'],
    notes: [
      'Thiết bị gửi về tận nhà, được bảo hành trong suốt thời gian thuê.',
      'Sở hữu thiết bị sau 1 năm với chi phí ưu đãi.',
    ],
  },
  {
    tableColor: '#6FC3CF',
    tableHeader: [
      'Tên gói',
      'Phí / Tháng (VNĐ)',
      'Số học sinh',
      'Thiết bị sử dụng',
      'Nội dung',
    ],
    tableBody: [
      [
        'Gói 6 tháng',
        '399.000',
        '1.000',
        'Thiết bị + App 6 tháng',
        'Toán + Tiếng Việt + Tiếng Anh, AI theo dõi & gợi ý',
      ],
      [
        'Gói 12 tháng',
        '299.000',
        '800',
        'Tặng 1 tháng sử dụng',
        'Dành cho 2 học sinh, dùng chung thiết bị',
      ],
    ],
    colsWidth: ['w-1/8', 'w-1/8', 'w-1/8', 'w-2/8', 'w-3/8'],
  },
  {
    decoratorUrl: '/assets/images/pricing/decorator_3.png',
    tableColor: '#FF9025',
    header: 'PHÍ DỊCH VỤ DUY TRÌ (SUBSCRIPTION)',
    tableHeader: [
      'Tên gói',
      'Phí / Tháng (VNĐ)',
      'Số học sinh',
      'Thiết bị sử dụng',
      'Nội dung',
    ],
    tableBody: [
      [
        'Gói 6 tháng',
        '399.000',
        '1.000',
        'Thiết bị + App 6 tháng',
        'Toán + Tiếng Việt + Tiếng Anh, AI theo dõi & gợi ý',
      ],
      [
        'Gói 12 tháng',
        '299.000',
        '800',
        'Tặng 1 tháng sử dụng',
        'Dành cho 2 học sinh, dùng chung thiết bị',
      ],
    ],
    colsWidth: ['w-1/6', 'w-1/6', 'w-1/6', 'w-1/6', 'w-2/6'],
    notes: ['Ghi chú: bắt đầu tính phí sau một năm đầu.'],
  },
];

export default pricingContent;
