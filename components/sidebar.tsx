'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';
import {
  Montserrat,
  Poppins,
  Source_Code_Pro,
  Source_Serif_4,
} from 'next/font/google';

const sourceCodeProFont = Source_Code_Pro({
  weight: '600',
  subsets: ['latin'],
});

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversaition',
    icon: MessageSquare,
    href: '/dashboard',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generaition',
    icon: ImageIcon,
    href: '/dashboard',
    color: 'text-pink-700',
  },
  {
    label: 'Video Generaition',
    icon: VideoIcon,
    href: '/dashboard',
    color: 'text-orange-500',
  },
  {
    label: 'Music Generaition',
    icon: Music,
    href: '/dashboard',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generaition',
    icon: Code,
    href: '/dashboard',
    color: 'text-green-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard',
  },
];

// applies branding to any string that contains 'ai'
const brandText = (text: string) => {
  const pattern = /ai/g;
  let beforeAI = ""
  let afterAI = ""

  const match = pattern.exec(text);
  if (match) {
    beforeAI = text.slice(0, match.index);
    afterAI = text.slice(match.index + match[0].length);

    return (
    <span>{beforeAI}<span className={cn('text-sky-500', sourceCodeProFont.className)}>AI</span>{afterAI}</span>
      )
  }
 
  return text
   
   
};

const Sidebar = () => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            {/* Need to design and add logo and import from  public */}
            <Image fill alt='Logo' src='/logo.png' />
          </div>
          <h1 className={cn('text-2xl font-bold', sourceCodeProFont.className)}>
            Gener<span className='text-sky-500 '>AI</span>t
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition'
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {brandText(route.label)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
