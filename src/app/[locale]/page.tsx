import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Title from '@/components/Title';
import Contact from '@/features/contact/Contact/Contact';
import HighlightFeature from '@/features/intro/HighlightFeature/HighlightFeature';
import Introduction from '@/features/intro/Introduction/Introduction';
import Video from '@/features/intro/Video/Video';
import Comments from '@/features/user-reviews/Comments/Comments';
import Questions from '@/features/user-support/Questions/Questions';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';

export const runtime = 'edge';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = async (props: { params: Promise<{ locale: string }> }) => {
  const { locale } = await props.params;
  unstable_setRequestLocale(locale);

  const BannerContent = () => {
    const maxSize30 = generateResponsiveFontSizeClasses(30);

    return (
      <div>
        <Title
          mainTitle="Giới thiệu ứng dụng"
          subTitle="Giải pháp học tập thông minh cho học sinh tiểu học"
          mainTitleClassName="font-cookie mb-4"
        />
        <div className="mt-[20px] flex">
          <Button className={`font-cookie bg-[#6fc3cf] text-white ${maxSize30}`}>
            Liên hệ
          </Button>
          <Button className={`font-cookie ml-[12px] bg-[#ffe086] text-[#434552] ${maxSize30}`}>
            Dùng thử
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="text-[#434552]">
      <Banner
        content={<BannerContent />}
        imgUrl="/assets/images/homepage/banner_decorator.png"
      />
      <Introduction />
      <HighlightFeature />
      <Video />
      <Comments />
      <Questions />
      <Contact />
    </div>
  );
};

export default IndexPage;
