import Title from '@/components/Title';
import ContactForm from '@/components/ui/ContactForm';

export const runtime = 'edge';

export default function Contact() {
  return (
    <div>
      <div className="h-[150px] bg-[#FFE086] md:h-[180px]">
        <Title
          mainTitle="LIÊN HỆ VỚI CHÚNG TÔI"
          mainTitleClassName="text-[#434552] text-center lg:text-[60px] pt-[60px] font-cookie"
        />
      </div>
      <div className="relative" style={{ backgroundImage: 'url(\'/assets/images/policy/bg.png\')' }}>
        <div className="absolute top-0 right-0 left-0 z-10 h-[100px] bg-[#FFE086]" />
        <div className="relative z-20 grid grid-cols-12 items-center gap-[40px] pb-[100px]">
          <img
            src="/assets/images/contact/decorator.png"
            alt="decorator"
            width="600px"
            height="500px"
            className="max-lg:hidden lg:col-span-5 lg:col-start-2"
          />
          <div className="col-span-12 mx-2 rounded-[20px] border-3 border-[#434552] bg-[#6FC3CF] p-2 pb-6 text-white md:p-6 md:pb-10 lg:col-span-5 lg:p-10">
            <ContactForm textColor="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
