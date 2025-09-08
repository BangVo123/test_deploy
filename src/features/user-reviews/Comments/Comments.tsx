import Title from '@/components/Title';
import config from '@/features/user-reviews/Comments/config/commentConfig';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

function Comment({
  imgUrl,
  direction = 'ltr',
  avtBorder,
  commentBorder,
  textColor,
  name,
  content,
}: {
  imgUrl: string;
  direction: 'ltr' | 'rtl';
  avtBorder: string;
  commentBorder: string;
  textColor: string;
  name: string;
  content: string;
}) {
  const maxSize35 = generateResponsiveFontSizeClasses(35);

  return (
    <div className="mb-[40px] flex w-full flex-col items-center">
      <div
        className={cn(
          'flex items-center md:w-4/5 max-md:w-5/6',
          direction === 'rtl' && 'flex-row-reverse',
        )}
      >
        <div
          className="bg-[length:100%_100%] bg-center bg-no-repeat max-md:h-[110px] max-md:w-[110px] md:h-[140px] md:w-[140px] lg:h-[170px] lg:w-[170px]"
          style={{
            backgroundImage: `url('${avtBorder}')`,
          }}
        >
          <img
            src={imgUrl}
            alt="avatar"
            width="170px"
            height="170px"
            className="rounded-full p-1"
          />
        </div>
        <div className="h-[1px] border-1 border-dashed border-black max-md:mx-2 max-md:w-[20px] md:mx-3 md:w-[30px] lg:mx-4 lg:w-[40px]"></div>
        <div
          className={`flex-1 bg-[length:100%_100%] bg-center bg-no-repeat py-6 max-md:px-[20px] md:px-[40px] lg:px-[60px] ${maxSize35}`}
          style={{
            backgroundImage: `url('${commentBorder}')`,
          }}
        >
          <p className="text-left">{content}</p>
          <p className={cn('text-right', textColor)}>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default function Comments() {
  const maxSize60 = generateResponsiveFontSizeClasses(60);

  return (
    <div
      className="flex flex-col items-center bg-[length:100%_100%] bg-cover bg-no-repeat pt-[200px] pb-[20px]"
      style={{
        backgroundImage:
          'url(\'/assets/images/homepage/highlight_feature_bg.png\')',
      }}
    >
      <Title
        mainTitle="NHẬN XÉT CỦA NGƯỜI DÙNG"
        mainTitleClassName={`text-[#567FC0] text-center font-cookie ${maxSize60}`}
      />
      <img
        src="/assets/images/homepage/comment_decorator.png"
        alt="decorator"
        width="390px"
        height="100px"
        className="mt-[20px] mb-[40px] max-md:max-w-[260px] md:max-w-[300px]"
      />
      {config.map((el, idx) => (
        <Comment
          key={idx}
          imgUrl="/assets/images/homepage/example_avt.png"
          direction={idx % 2 === 0 ? 'ltr' : 'rtl'}
          avtBorder={el.avt}
          commentBorder={el.comment}
          textColor={el.color}
          name={el.name}
          content={el.content}
        />
      ))}
    </div>
  );
}
