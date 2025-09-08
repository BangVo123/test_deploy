'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

import Button from '../Button';
import Title from '../Title';

export default function ContactForm({
  textColor = 'text-[#434552]',
  inputColor = 'text-[#434552]',
  isTrialForm = false,
}: {
  textColor?: string;
  inputColor?: string;
  isTrialForm?: boolean;
}) {
  type FormVal = {
    name: string;
    email: string;
    phoneNumber: string;
    content: string;
    checkbox: boolean;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormVal>();
  const handleContactSubmit = (_: FormVal) => {
    reset();
  };

  const maxSize50 = generateResponsiveFontSizeClasses(50);
  const maxSize30 = generateResponsiveFontSizeClasses(30);
  const maxSize25 = generateResponsiveFontSizeClasses(25);
  const maxSize20 = generateResponsiveFontSizeClasses(20);

  return (
    <div className={textColor}>
      <Title
        mainTitle="Bạn cần tư vấn thêm"
        subTitle="Liên hệ với chúng tôi"
        className={cn('mb-1 text-[#434552]', textColor)}
        mainTitleClassName={`3xl:leading-[3.4375rem] leading-[1.5125rem] md:leading-[2.0625rem] lg:leading-[2.6125rem] xl:leading-[3.025rem] 2xl:leading-[3.3rem] ${maxSize50}`}
        subTitleClassName={`xl:leading-[4.0625rem] lg:leading-[3.52rem] md:leading-[2.98rem] leading-[2.3rem] lg:mt-0 ${maxSize30}`}
      />
      <form onSubmit={handleSubmit(handleContactSubmit)} className={maxSize25}>
        <div className={cn('mb-3')}>
          <label htmlFor="name" className={`pb-[6px] ${maxSize20}`}>
            Họ Tên
          </label>
          <input
            id="name"
            type="text"
            placeholder="Họ và tên của bạn"
            {...register('name', {
              required: `Tên không được để trống`,
            })}
            className={cn(
              'md:h-[55px] h-[40px] min-w-[200px] w-full rounded-[8px] border-1 border-[#434552] px-4 bg-white',
              inputColor,
            )}
          />
          {errors?.name?.message && (
            <p className="mt-1 text-[20px] text-[#EC6277] max-md:text-[18px]">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={cn('mb-3')}>
          <label htmlFor="email" className={`pb-[6px] ${maxSize20}`}>
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="you@company.com"
            {...register('email', {
              required: `Email không được để trống`,
              validate: (val) => {
                const regex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;
                if (!regex.test(val)) {
                  return 'Email không hợp lệ';
                } else {
                  return true;
                }
              },
            })}
            className={cn(
              'md:h-[55px] h-[40px] w-full min-w-[200px] rounded-[8px] border-1 border-[#434552] px-4 bg-white',
              inputColor,
            )}
          />
          {errors?.email?.message && (
            <p className="mt-1 text-[20px] text-[#EC6277] max-md:text-[18px]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className={cn('mb-3')}>
          <label htmlFor="phoneNumber" className={`pb-[6px] ${maxSize20}`}>
            Số Điện Thoại
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="0987654321"
            {...register('phoneNumber', {
              required: `Số điện thoại không được để trống`,
              validate: (val) => {
                const regex
                  = /^(?:0|\+84)(?:3[2-9]|5[2689]|7[06-9]|8[1-689]|9\d)\d{7}$/;
                if (!regex.test(val)) {
                  return 'Số điện thoại không hợp lệ';
                } else {
                  return true;
                }
              },
            })}
            className={cn(
              'md:h-[55px] h-[40px] w-full min-w-[200px] rounded-[8px] border-1 border-[#434552] px-4 bg-white',
              inputColor,
            )}
          />
          {errors?.phoneNumber?.message && (
            <p className="mt-1 text-[20px] text-[#EC6277] max-md:text-[18px]">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="content" className={`pb-[6px] ${maxSize20}`}>
            Chúng tôi có thể giúp gì cho bạn?
          </label>
          <textarea
            id="content"
            className={cn(
              'md:max-h-[142px] md:min-h-[142px] max-h-[100px] min-h-[100px] min-w-[200px] w-full resize-none overflow-y-auto rounded-[8px] border-1 border-[#434552] px-4 py-4 leading-[24px] bg-white',
              inputColor,
            )}
            placeholder="Hãy cho chúng tôi biết một chút về bạn"
            {...register('content', {
              required:
                'Vui lòng nhập thông tin giới thiệu hoặc vấn đề cần giải quyết',
            })}
          />
          {errors?.content?.message && (
            <p className="mt-1 text-[20px] text-[#EC6277] max-md:text-[18px]">
              {errors.content.message}
            </p>
          )}
        </div>

        {isTrialForm && (
          <div className={`${maxSize30}`}>
            <div className="flex">
              <input
                id="checkbox"
                type="checkbox"
                className="mr-2 w-[20px] accent-[#434552]"
                {...register('checkbox', {
                  required:
                    'Vui lòng đồng ý với điều khoản sử dụng và chính sách bảo mật',
                })}
              />
              <p>
                Tôi đồng ý với
                {' '}
                <strong>điều khoản sử dụng</strong>
                {' '}
                và
                {' '}
                <strong>chính sách bảo mật</strong>
              </p>
            </div>
            {errors?.content?.message && (
              <p className="mt-1 text-[20px] text-[#EC6277] max-md:text-[18px]">
                {errors.checkbox?.message}
              </p>
            )}
          </div>
        )}

        <Button
          type="submit"
          className={`font-grocery mt-3 h-[40px] w-full bg-[#EC6277] leading-[2.3rem] text-white md:mt-6 md:h-[55px] md:leading-[2.98rem] lg:leading-[3.52rem] xl:leading-[4.0625rem] ${maxSize30}`}
        >
          {isTrialForm ? 'Đăng ký' : 'Gửi liên hệ'}
        </Button>
      </form>
    </div>
  );
}
