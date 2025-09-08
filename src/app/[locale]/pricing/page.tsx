import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Title from '@/components/Title';
import PricingTableComponents from '@/features/pricing/PricingTableComponents';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';

export const runtime = 'edge';

export default function PricingPage() {
  const BannerContent = () => {
    const maxSize60 = generateResponsiveFontSizeClasses(60);
    const maxSize50 = generateResponsiveFontSizeClasses(50);
    const maxSize35 = generateResponsiveFontSizeClasses(35);
    const maxSize30 = generateResponsiveFontSizeClasses(30);
    return (
      <div className="text-white">
        <Title
          mainTitle="Bảng giá SmartLearn"
          subTitle="Giới thiệu ngắn gọn gồm 2 tuỳ chỉnh"
          mainTitleClassName={`font-cookie mt-0 ${maxSize60}`}
          subTitleClassName={`${maxSize50}`}
        />
        <p className={maxSize35}>
          <span className="text-[#EC6277]">Mua trọn bộ: </span>
          Tiết kiệm tối đa, không lo chi phí phát sinh.
        </p>
        <p className={maxSize35}>
          <span className="text-[#FFE086]">Thuê linh hoạt: </span>
          Chi trả nhẹ nhàng, dễ dàng sở hữu ngay trong năm đầu tiên.
        </p>
        <div className="mt-2 flex gap-4">
          <Button className={`font-cookie h-[40px] bg-[#EC6277] py-2 text-white md:min-h-[60px] ${maxSize30}`}>
            Liên hệ tư vấn
          </Button>
          <Button className={`font-cookie h-[40px] bg-[#FFE086] py-2 text-[#434552] md:min-h-[60px] ${maxSize30}`}>
            Dùng thử miễn phí
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Banner
        content={<BannerContent />}
        imgUrl="/assets/images/pricing/banner_decorator.png"
        className="mb-[2rem] w-full bg-[#6FC3CF] md:mb-[3rem]"
      />
      <div className="flex w-full flex-col items-center px-3 md:max-w-5/6 lg:max-w-4/5">
        <PricingTableComponents />
      </div>
    </div>
  );
}
