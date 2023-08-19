'use client';

import { Source_Code_Pro } from 'next/font/google';
// import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

import { brandText, cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Source_Code_Pro({
  weight: '600',
  subsets: ['latin'],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
          {/* <Image fill alt='Logo' src='/logo.png' /> */}
        </div>
        <h1 className={cn('text-2xl font-bold text-white', font.className)} data-testid='app-name' >
          {brandText('GenerAIt')}
        </h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant='outline' className='rounded-full text-sky-500 font-bold hover:text-sky-400 text-md'>
            {isSignedIn ? 'Continue' : 'Sign In'}
          </Button>
        </Link>
      </div>
    </nav>
  );
};
