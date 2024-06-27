/** @format */
'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useForm, Controller, Resolver } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: Record<string, any> = {};
  if (!values.name) {
    errors.name = {
      type: 'required',
      message: 'Name is required.',
    };
  }
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required.',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Invalid email address.',
    };
  }
  if (!values.phone) {
    errors.phone = {
      type: 'required',
      message: 'Phone number is required.',
    };
  }
  if (!values.message) {
    errors.message = {
      type: 'required',
      message: 'Message is required.',
    };
  } else if (values.message.length > 200) {
    errors.message = {
      type: 'maxLength',
      message: 'Message cannot exceed 200 characters.',
    };
  }
  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Handle form submission
  });
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col md:flex-row items-center justify-center h-full'>
        <div className='md:w-1/2'>
          <Image
            src='/contact.jpeg'
            alt='Contact Us'
            width={800}
            height={500}
          />
        </div>
        <div className='md:w-1/2 md:pl-8'>
          <h1 className='text-2xl font-bold mb-4 md:text-left text-center'>
            Contact Us
          </h1>
          <form
            onSubmit={onSubmit}
            className='space-y-4 md:px-0 px-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                {...register('name')}
                className='mt-1 py-2 pl-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                {...register('email')}
                className='mt-1 py-2 pl-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone
              </label>
              <Controller
                name='phone'
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    className='mt-1 py-2 pl-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    autoComplete='off'
                  />
                )}
              />
              {errors.phone && (
                <p className='text-red-500 text-sm'>{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                {...register('message')}
                className='mt-1 py-2 pl-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                maxLength={200}
              />
              {errors.message && (
                <p className='text-red-500 text-sm'>{errors.message.message}</p>
              )}
            </div>

            <div>
              <Button
                type='submit'
                className='hover:bg-gray-400'>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
