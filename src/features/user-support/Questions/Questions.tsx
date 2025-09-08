import Box from '@/components/Box';
import Title from '@/components/Title';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';

import questions, { type Question } from './config/questionConfig';

const QuestionContent = ({
  mainTitle,
  subTitle,
  color,
}: Omit<Question, 'orderBorder'>) => {
  const maxSize50 = generateResponsiveFontSizeClasses(50);
  const maxSize30 = generateResponsiveFontSizeClasses(30);

  return (
    <div className="rounded-[20px] border-3 border-[#434552] px-[60px] max-lg:px-10 max-lg:py-5 lg:py-10">
      <Title
        mainTitle={mainTitle}
        subTitle={subTitle}
        className="px-6"
        mainTitleClassName={`${color} ${maxSize50} 3xl:leading-[3.4375rem] leading-[1.5125rem] md:leading-[2.0625rem] lg:leading-[2.6125rem] xl:leading-[3.025rem] 2xl:leading-[3.3rem]`}
        subTitleClassName={`text-[#434552] lg:mt-0 max-lg:mt-0 mb-0 ${maxSize30}`}
      />
    </div>
  );
};

export default function Questions() {
  const maxSize60 = generateResponsiveFontSizeClasses(60);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div
        className="mt-[100px] mb-[60px] flex items-center bg-[length:100%_100%] bg-center bg-no-repeat px-[120px]"
        style={{
          backgroundImage:
            'url(\'/assets/images/homepage/question_header_bg.png\')',
        }}
      >
        <img
          src="/assets/images/homepage/question_decorator.png"
          alt="decorator"
          width="130"
          height="170"
          className="pr-[20px] max-md:max-w-[95px] md:max-w-[105px] lg:max-w-[130px]"
        />
        <Title
          mainTitle="CÂU HỎI THƯỜNG GẶP"
          mainTitleClassName={`font-cookie ${maxSize60}`}
        />
      </div>
      {questions.map((el, idx) => (
        <Box
          order={idx + 1}
          orderColor={el.color}
          orderBorder={el.orderBorder}
          key={idx}
          panelColor={el.panelColor}
          children={QuestionContent({
            mainTitle: el.mainTitle,
            subTitle: el.subTitle,
            color: el.color,
          })}
          className="mb-[80px]"
        />
      ))}
    </div>
  );
}
