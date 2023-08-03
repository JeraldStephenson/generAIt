'use client';

import { useState } from 'react';
import axios from 'axios';
import * as z from 'zod';
import { Download, ImageIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { amountOptions, formSchema, resolutionOptions } from './constants';
import { brandText, cn } from '@/lib/utils';
import { Heading } from '@/components/heading';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';




const ImagePage = () => {
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      amount: '1',
      resolution: '512x512',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // reset images - TODO save previous images before reset for user to access somewhere
      // can also modify to allow for additional images to be generated and added to images[] state and allow scrolling through them
        //if doing the above may want to only do this / group the images by prompt
      setImages([]);

      // values will be modified on server
      const response = await axios.post('/api/image', values);

      const urls = response.data.map((image: {url: string}) => image.url)

      setImages(urls)

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
                  <FormItem className='col-span-12 lg:col-span-6'>
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
              <FormField 
              name='amount'
              control={form.control}
              render={({field}) => (
                <FormItem className='col-span-12 lg:col-span-2'>
                  <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value}/>
                      </SelectTrigger>

                    </FormControl>
                    <SelectContent>
                      {amountOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
             />
             <FormField 
              name='resolution'
              control={form.control}
              render={({field}) => (
                <FormItem className='col-span-12 lg:col-span-2'>
                  <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value}/>
                      </SelectTrigger>

                    </FormControl>
                    <SelectContent>
                      {resolutionOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
             />
             
              
              <Button
                className='col-span-12 lg:col-span-2 w-full bg-[#111827]'
                disabled={isLoading}
              >
                {brandText('Generait')}
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {/* change isLoading to true to view what loading state looks like */}
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label='Awaiting instructions...' />
          )}
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
          {images.map((src) => (
            <Card 
            key={src}
            className='rounded-lg overflow-hidden'
            >
              <div className='relative aspect-square'>
              <Image 
              alt='Image'
              fill
              src={src}
              />
              </div>
              <CardFooter className='p-2'>
                <Button 
                variant='secondary' 
                className='w-full'
                onClick={() => window.open(src)}
                >
                  <Download className='h-4 w-4 mr-2'/>
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
