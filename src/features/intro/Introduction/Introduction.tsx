import Box from '@/components/Box';
import TriangleSVG from '@/components/icons/Triangle';
import Title from '@/components/Title';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';

export default function Introduction() {
  const maxSize60 = generateResponsiveFontSizeClasses(60);
  const maxSize50 = generateResponsiveFontSizeClasses(50);
  const maxSize40 = generateResponsiveFontSizeClasses(40);
  const maxSize35 = generateResponsiveFontSizeClasses(35);

  return (
    <div className="flex min-h-[100vh] items-center justify-center pt-[220px] pb-[20px]">
      <Box decoratorUrl="/assets/images/homepage/introduction_decorator.png">
        <div className="rounded-[20px] border-3 border-[#434552] py-[80px] max-md:px-[10px] md:px-[35px] lg:px-[60px]">
          <Title
            mainTitle="GIỚI THIỆU VỀ SMARTLEARN"
            mainTitleClassName={`text-[#434552] text-center text-[#EC6277] font-cookie ${maxSize60}`}
          />
          <img
            src="/assets/images/homepage/introduction_decorator1.png"
            alt="flower decorator"
            width="270px"
            height="80px"
            className="mx-auto mt-4 mb-6"
          />
          <p className={`3xl:leading-[3.4375rem] leading-[1.5125rem] md:leading-[2.0625rem] lg:leading-[2.6125rem] xl:leading-[3.025rem] 2xl:leading-[3.3rem] ${maxSize50}`}>
            Giới thiệu nhanh về ứng dụng
          </p>
          <p className={`leading-[1.72rem] md:leading-[2.23rem] lg:leading-[2.75rem] xl:leading-[3.26rem] 2xl:leading-[3.4375rem] ${maxSize40}`}>
            Tự học hiệu quả - Đồng hành cùng con từ lớp 1 đến lớp 5
          </p>
          <div className={`flex items-start justify-center leading-[1.77rem] md:leading-[2.36rem] lg:leading-[2.75rem] xl:leading-[3.4275rem] ${maxSize35}`}>
            <TriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] md:max-w-[1.5rem] md:min-w-[1.5rem] lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <p className="flex-1 max-md:pl-1 md:pl-3 lg:pl-5">
              Ứng dụng học tập thông minh giành riêng cho học sinh tiểu học
            </p>
          </div>
          <div className={`flex items-start justify-center leading-[1.77rem] md:leading-[2.36rem] lg:leading-[2.75rem] xl:leading-[3.4275rem] ${maxSize35}`}>
            <TriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] md:max-w-[1.5rem] md:min-w-[1.5rem] lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <p className="flex-1 max-md:pl-1 md:pl-3 lg:pl-5">
              Nội dung được biên soạn theo chuẩn sách giáo khoa của Bộ Giáo dục
              & Đào tạo
            </p>
          </div>
          <div className={`flex items-start justify-center leading-[1.77rem] md:leading-[2.36rem] lg:leading-[2.75rem] xl:leading-[3.4275rem] ${maxSize35}`}>
            <TriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] md:max-w-[1.5rem] md:min-w-[1.5rem] lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <div className="flex-1 max-md:pl-1 md:pl-3 lg:pl-5">
              <p className="text-[#567fc0]">Bao gồm 3 môn học chính:</p>
              <ul className="list-inside list-disc marker:text-[0.5rem] marker:text-[#ec6277] md:marker:text-[0.75rem] lg:marker:text-[1rem]">
                <li>
                  <span className="pr-2 text-[#ec6277]">Toán học:</span>
                  {' '}
                  rèn tư
                  duy logic, luyện tính nhanh
                </li>
                <li>
                  <span className="pr-2 text-[#45A97F]">Tiếng Việt:</span>
                  {' '}
                  phát
                  triển kỹ năng đọc – viết – hiểu
                </li>
                <li>
                  <span className="pr-2 text-[#F9AC80]">Tiếng Anh:</span>
                  {' '}
                  làm
                  quen từ vựng, nghe – nói – phản xạ tự nhiên
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex items-start justify-center leading-[1.77rem] md:leading-[2.36rem] lg:leading-[2.75rem] xl:leading-[3.4275rem] ${maxSize35}`}>
            <TriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] md:max-w-[1.5rem] md:min-w-[1.5rem] lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <div className="flex-1 max-md:pl-1 md:pl-3 lg:pl-5">
              <p className="text-[#567FC0]">Đối tượng sử dụng:</p>
              <ul className="list-inside list-disc marker:text-[0.5rem] md:marker:text-[0.75rem] lg:marker:text-[1rem]">
                <li>
                  Học sinh từ lớp
                  <span className="text-[#EC6277]">1 đến lớp 5</span>
                </li>
                <li>Giáo viên, gia sư</li>
                <li>Phụ huynh đồng hành cùng con tại nhà</li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
