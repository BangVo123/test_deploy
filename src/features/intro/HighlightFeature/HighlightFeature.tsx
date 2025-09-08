import BorderBox from '@/components/BorderBox';
import YellowTriangleSVG from '@/components/icons/YellowTriangle';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';

export default function HighlightFeature() {
  const maxSize50 = generateResponsiveFontSizeClasses(50);
  const maxSize30 = generateResponsiveFontSizeClasses(30);
  return (
    <div
      className="flex justify-center overflow-hidden bg-[length:100%_100%] bg-cover bg-no-repeat pt-[200px] pb-[100px]"
      style={{
        backgroundImage:
          'url(\'/assets/images/homepage/highlight_feature_bg.png\')',
      }}
    >
      <BorderBox
        headerTitle="TÍNH NĂNG NỔI BẬT"
        decoratorUrl="/assets/images/homepage/highlight_title_decorator.png"
        bottomRightDecoratorUrl="/assets/images/homepage/highlight_feature_decorator.png"
      >
        <div>
          <div className="flex items-start justify-center">
            <YellowTriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] max-md:mr-1 md:mt-2 md:mr-3 md:max-w-[1.5rem] md:min-w-[1.5rem] lg:mr-5 lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <div className="flex-1">
              <p className={`${maxSize50} 3xl:leading-[3.4375rem] leading-[1.5125rem] md:leading-[2.0625rem] lg:leading-[2.6125rem] xl:leading-[3.025rem] 2xl:leading-[3.3rem]`}>
                Tablet chỉ dùng để học
              </p>
              {/*  */}
              <p className={maxSize30}>
                Không trò chơi – Không internet – Không gây xao nhãng
              </p>
              <p className={maxSize30}>
                Giúp con tập trung 100% khi học
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center max-md:mt-6 md:mt-8 lg:mt-10">
            <YellowTriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] max-md:mr-1 md:mt-2 md:mr-3 md:max-w-[1.5rem] md:min-w-[1.5rem] lg:mr-5 lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <div className="flex-1">
              <p className={`${maxSize50} 3xl:leading-[3.4375rem] leading-[1.5125rem] md:leading-[2.0625rem] lg:leading-[2.6125rem] xl:leading-[3.025rem] 2xl:leading-[3.3rem]`}>
                Cá nhân hóa lộ trình học với AI
              </p>
              {/*  */}
              <p className={maxSize30}>
                Ứng dụng phân tích năng lực của từng học sinh để tự động điều
                chỉnh nội dung phù hợp – không học lệch, không học quá sức
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center max-md:mt-6 md:mt-8 lg:mt-10">
            <YellowTriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] max-md:mr-1 md:mt-2 md:mr-3 md:max-w-[1.5rem] md:min-w-[1.5rem] lg:mr-5 lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <div className="flex-1">
              <p className={`${maxSize50} 3xl:leading-[3.4375rem] leading-[1.5125rem] md:leading-[2.0625rem] lg:leading-[2.6125rem] xl:leading-[3.025rem] 2xl:leading-[3.3rem]`}>
                Chương trình chuẩn
              </p>
              {/*  */}
              <p className={maxSize30}>
                Nội dung từng bài học, từng kỹ năng đều được xây dựng theo
                chương trình mới nhất của Bộ Giáo Dục
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center max-md:mt-6 md:mt-8 lg:mt-10">
            <YellowTriangleSVG className="max-w-[1.125rem] min-w-[1.125rem] max-md:mr-1 md:mt-2 md:mr-3 md:max-w-[1.5rem] md:min-w-[1.5rem] lg:mr-5 lg:max-w-[1.75rem] lg:min-w-[1.75rem] xl:max-w-[2.1875rem] xl:min-w-[2.1875rem]" />
            <div className="flex-1">
              <p className={`${maxSize50} 3xl:leading-[3.4375rem] leading-[1.5125rem] md:leading-[2.0625rem] lg:leading-[2.6125rem] xl:leading-[3.025rem] 2xl:leading-[3.3rem]`}>
                Dễ dàng theo dõi tiến trình học tập
              </p>
              {/*  */}
              <p className={maxSize30}>
                Báo cáo chi tiết mỗi buổi học
              </p>
              <p className={maxSize30}>
                Nhắc nhở nếu con học chưa hiệu quả
              </p>
              <p className={maxSize30}>
                Gợi ý bài ôn tập phù hợp
              </p>
            </div>
          </div>
        </div>
      </BorderBox>
    </div>
  );
}
