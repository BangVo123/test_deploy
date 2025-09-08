import Title from '@/components/Title';
import ContactForm from '@/components/ui/ContactForm';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';

export default function Contact() {
  const maxSize60 = generateResponsiveFontSizeClasses(60);
  return (
    <div
      className="flex justify-center bg-[length:100%_100%] bg-cover bg-no-repeat pt-[200px] pb-[100px]"
      style={{
        backgroundImage:
          'url(\'/assets/images/homepage/highlight_feature_bg.png\')',
      }}
    >
      <div className="relative max-md:w-5/6 md:w-4/5">
        <img
          src="/assets/images/homepage/contact_border.png"
          alt=""
          width="1000px"
          height="1000px"
          className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full"
        />
        <img
          src="/assets/images/homepage/contact_decorator.png"
          alt=""
          width="150px"
          height="300px"
          className="absolute top-[120px] right-[60px] z-30 max-md:hidden"
        />
        <div className="relative z-20 bg-white max-md:m-8 max-md:p-[20px] md:m-10 md:p-[40px] lg:m-12 lg:p-[80px]">
          <Title
            mainTitle="LIÊN HỆ"
            className="mb-5"
            mainTitleClassName={`text-[#EC6277] text-center font-cookie ${maxSize60}`}
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
