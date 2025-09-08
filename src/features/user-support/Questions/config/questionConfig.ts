export type Question = {
  orderBorder: string;
  mainTitle: string;
  subTitle: string;
  color: string;
  panelColor?: string;
};

const questions: Question[] = [
  {
    orderBorder: 'url(\'/assets/images/homepage/order_border.png\')',
    mainTitle: 'Ứng dụng có phù hợp với học sinh lớp 1 không?',
    subTitle:
      'Có! Giao diện đơn giản, có âm thanh hướng dẫn, hình ảnh minh họa rõ ràng, dễ thao tác với cả bé mới vào lớp 1.',
    color: 'text-[#6FC3CF]',
    panelColor: 'bg-[#6FC3CF]',
  },
  {
    orderBorder: 'url(\'/assets/images/homepage/order_border_1.png\')',
    mainTitle: 'Có thể dùng thử miễn phí không?',
    subTitle: 'Bạn được dùng thử miễn phí 7 ngày toàn bộ chức năng trước khi quyết định đăng ký.',
    color: 'text-[#EC6277]',
    panelColor: 'bg-[#EC6277]',
  },
  {
    orderBorder: 'url(\'/assets/images/homepage/order_border_2.png\')',
    mainTitle: 'Phụ huynh có cần hỗ trợ con học không?',
    subTitle: 'Ứng dụng được thiết kế để học sinh có thể tự học. Tuy nhiên, phụ huynh vẫn có thể theo dõi tiến độ và hỗ trợ khi cần.',
    color: 'text-[#45A97F]',
    panelColor: 'bg-[#45A97F]',
  },
  {
    orderBorder: 'url(\'/assets/images/homepage/order_border_3.png\')',
    mainTitle: 'Học sinh có bị nghiện tablet không?',
    subTitle: 'Không! Tablet được thiết lập chỉ dùng để học – không có trò chơi, không vào YouTube hay mạng xã hội. Đảm bảo sự tập trung khi học cho học sinh.',
    color: 'text-[#FFE086]',
    panelColor: 'bg-[#FFE086]',
  },
];

export default questions;
