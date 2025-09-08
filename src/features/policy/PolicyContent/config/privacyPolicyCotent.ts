type PContentType = {
  tag: 'p';
  value: string;
  textColor?: string;
};
type ULContentType = {
  tag: 'ul';
  value: string[];
  textColor?: string;
};

export type PolicyContentType = PContentType | ULContentType;

const privacyPolicyContent: PolicyContentType[] = [
  {
    tag: 'p',
    value:
      'SmartLearn cam kết bảo mật thông tin cá nhân của người dùng và minh bạch về việc thu thập, sử dụng, lưu trữ, chia sẻ cũng như quyền lợi liên quan.',
  },
  {
    tag: 'p',
    value: '1. Thông Tin Chúng Tôi Thu Thập',
    textColor: 'text-[#567FC0]',
  },
  {
    tag: 'p',
    value:
      'Chúng tôi có thể thu thập thông tin cá nhân của người dùng khi thực hiện đặt hàng, liên hệ tư vấn, hỗ trợ bao gồm : ',
  },
  {
    tag: 'ul',
    value: ['Họ và tên', 'Số điện thoại', 'Địa chỉ email', 'Địa chỉ giao hàng'],
  },
  {
    tag: 'p',
    value: '2. Mục Đích Sử Dụng Thông Tin',
    textColor: 'text-[#567FC0]',
  },
  {
    tag: 'p',
    value:
      'Thông tin cá nhân của người dùng sẽ được chúng tôi sử dụng cho các mục đích sau',
  },
  {
    tag: 'ul',
    value: [
      'Cung cấp và cá nhân hóa nội dung học tập',
      'Hỗ trợ khách hàng khi liên hệ, gửi thông báo báo cáo tiến độ học tập',
      'Nâng cao chất lượng dịch vụ và cải thiện hệ thống',
      'Tuân thủ pháp luật: Đáp ứng yêu cầu của các cơ quan chức năng có thẩm quyền (nếu có).',
      'Gửi thông tin khuyến mãi nếu người dùng đồng ý',
    ],
  },
  {
    tag: 'p',
    value: '3. Bảo Mật Thông Tin',
    textColor: 'text-[#567FC0]',
  },
  {
    tag: 'p',
    value:
      'Chúng tôi áp dụng nhiều biện pháp bảo mật nghiêm ngặt nhằm bảo vệ thông tin cá nhân khỏi các hành vi truy cập trái phép, sử dụng sai mục đích hoặc tiết lộ không mong muốn:',
  },
  {
    tag: 'ul',
    value: [
      'Nhân viên chỉ được phép truy cập thông tin khi cần thiết để phục vụ khách hhàng',
      'Chúng tôi không bán, trao đổi hay chia sẻ thông tin của khách hàng với bên thứ ba vì mục đích thương mại khi chưa có sự cho phàng',
      'Mọi thông tin cá nhân sẽ được xóa bỏ hoặc ẩn danh sau khi hết thời gian lưu trữ cần thiết hoặc theo yêu cầu từ khách hàng',
    ],
  },
  {
    tag: 'p',
    value: '4. Chia Sẻ Thông Tin',
    textColor: 'text-[#567FC0]',
  },
  {
    tag: 'p',
    value:
      'Thông tin cá nhân của quý khách chỉ được chia sẻ trong các trường hợp sau:',
  },
  {
    tag: 'ul',
    value: [
      'Đơn vị vận chuyển: Để thực hiện giao hàng tới địa chỉ của khách hàng.',
      'Nhân viên công ty: Để xử đơn hàng, chăm sóc khách hàng trong quá trình sử dụng sản phẩm.',
      'Cơ quan nhà nước: Khi có yêu cầu theo quy định pháp luật.',
      'Chuyển nhượng doanh nghiệp: Nếu có sự thay đổi về cấu trúc doanh nghiệp (sáp nhập, chuyển giao)',
    ],
  },
  {
    tag: 'p',
    value: '5. Quyền Của Bạn',
    textColor: 'text-[#567FC0]',
  },
  {
    tag: 'p',
    value:
      'Quý khách có toàn quyền đối với thông tin cá nhân của mình, bao gồm:',
  },
  {
    tag: 'ul',
    value: [
      'Yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân đã cung cấp.',
      'Khiếu nại nếu phát hiện thông tin bị sử dụng sai mục đích hoặc không an toàn.',
    ],
  },
  {
    tag: 'p',
    value: '6. Thay đổi chính sách',
    textColor: 'text-[#567FC0]',
  },
  {
    tag: 'p',
    value:
      'Chúng tôi có thể cập nhật Chính Sách Bảo Mật này để phù hợp với quy định pháp luật hoặc thay đổi trong hoạt động kinh doanh. Mọi cập nhật sẽ được công bố trên website và có hiệu lực kể từ thời điểm đăng tải.',
  },
  {
    tag: 'p',
    value: '7. Liên Hệ',
    textColor: 'text-[#567FC0]',
  },
  {
    tag: 'p',
    value:
      'Nếu quý khách hàng có bất kỳ thắc mắc, yêu cầu hoặc khiếu nại nào liên quan đến chính sách bảo mật, vui lòng liên hệ:',
  },

  {
    tag: 'ul',
    value: [
      'Email:',
      'Số điện thoại:',
      'Địa chỉ:',
      'Hoặc gửi yêu cầu qua biểu mẫu liên hệ trên website',
    ],
  },
  {
    tag: 'p',
    value:
      'Xin chân thành cảm ơn quý khách đã tin tưởng lựa chọn!',
    textColor: 'text-[#EC6277]',
  },
];

export default privacyPolicyContent;
