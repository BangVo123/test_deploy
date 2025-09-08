const generateResponsiveFontSizeClasses = (maxBaseSize: number) => {
  switch (maxBaseSize) {
    case 20:
      return 'text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]';
    case 25:
      return 'text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.5625rem]';
    case 30:
      return 'text-[1.0625rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] 2xl:text-[1.875rem] 3xl:text-[1.875rem]';
    case 35:
      return 'text-[1.125rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2.1875rem]';
    case 40:
      return 'text-[1.25rem] md:text-[1.625rem] lg:text-[2rem] xl:text-[2.375rem] 2xl:text-[2.5rem]';
    case 50:
      return 'text-[1.375rem] md:text-[1.875rem] lg:text-[2.375rem] xl:text-[2.75rem] 2xl:text-[3rem] 3xl:text-[3.125rem]';
    case 55:
      return 'text-[1.5rem] md:text-[2.125rem] lg:text-[2.625rem] xl:text-[3rem] 2xl:text-[3.25rem] 3xl:text-[3.4375rem]';
    case 60:
      return 'text-[1.625rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 3xl:text-[3.75rem]';
    case 65:
      return 'text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[3.75rem] 3xl:text-[4.0625rem]';
    case 80:
      return 'text-[2rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] 3xl:text-[5rem]';
    // Default is 30
    default:
      return 'text-[1.0625rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem]';
  }
};

export default generateResponsiveFontSizeClasses;
