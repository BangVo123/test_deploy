import Title from '@/components/Title';
import ContactForm from '@/components/ui/ContactForm';

export const runtime = 'edge';

export default function Contact() {
  return (
    <div>
      <div className="bg-[#BF9AEE]">
        <Title
          mainTitle="ĐĂNG KÝ DÙNG THỬ MIỄN PHÍ"
          mainTitleClassName="text-white text-center lg:text-[60px] py-[60px] font-cookie"
        />
      </div>
      <div className="flex justify-center" style={{ backgroundImage: 'url(\'/assets/images/policy/bg.png\')' }}>
        <div className="relative z-20 w-[400px] gap-[40px] pb-[100px] lg:w-[600px] 2xl:w-[800px]">
          <img
            src="/assets/images/trial/decorator.png"
            alt="decorator"
            width="400px"
            height="400px"
            className="absolute -top-14 -right-[100px] z-0 w-[100px] max-sm:right-0 md:w-[200px] lg:-top-20 lg:-right-[360px] lg:w-[300px] xl:-top-30 xl:-right-[400px] xl:w-[400px]"
          />
          <div className="mx-2 rounded-[20px] p-2 pb-6 text-white md:p-6 md:pb-10 lg:p-10">
            <ContactForm textColor="text-[#434552]" isTrialForm />
          </div>
        </div>
      </div>
    </div>
  );
}
