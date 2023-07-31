'use client';

import { useState } from 'react';
import axios from 'axios';
import * as z from 'zod';
import { ImageIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


import { formSchema } from './constants';
import { brandText, cn } from '@/lib/utils';
import { Heading } from '@/components/heading';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { UserAvatar } from '@/components/user-avatar';
import { BotAvatar } from '@/components/bot-avatar';

const ImagePage = () => {
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

      const response = await axios.post('/api/conversation');
      form.reset();
    } catch (error: any) {
      // TODO: Open Modal to allow purchase of premium access
      console.log(error);
    } finally {
      // refresh the router so that all server components are going to update
      router.refresh();
    }
  };

  return (

    <div>
      <Heading
        title='Image Generaition'
        description='Turn your prompt into an image'
        icon={ImageIcon}
        iconColor='text-pink-700'
        bgColor='bg-pink-700/10'
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='Example prompt: A peaceful scene of a cabin nestled in the mountains facing a lake.'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 lg:col-span-2 w-full'
                disabled={isLoading}
              >
                {brandText('Generait')}
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {/* change isLoading to true to view what loading state looks like */}
          {true && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label='Awaiting instructions...' />
          )}
         <div>Images will be rendered here</div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
