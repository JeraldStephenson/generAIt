'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation'

import { cn, brandText } from '@/lib/utils';
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
  Source_Code_Pro,
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
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generaition',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
  },
  {
    label: 'Video Generaition',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-500',
  },
  {
    label: 'Music Generaition',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generaition',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

// applies branding to any string that contains 'ai'
// const brandText = (text: string) => {
  
//   const pattern = /ai/gi;
//   let beforeAI = ""
//   let afterAI = ""

//   const match = pattern.exec(text);
//   if (match) {
//     beforeAI = text.slice(0, match.index);
//     afterAI = text.slice(match.index + match[0].length);

//     return (
//     <span className='group'>{beforeAI}<span className={cn('text-sky-500  group-hover:text-sky-400', sourceCodeProFont.className)}>AI</span>{afterAI}</span>
//       )
//   }
 
//   return text
   
// };

const Sidebar = () => { 
  const pathname = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            {/* Need to design and add logo and import from  public */}
            {/* <Image fill alt='Logo' src='/logo.png' /> */}
           {brandText('AI')}
          </div>
          <h1 className={cn('text-2xl font-bold', sourceCodeProFont.className)}>
            {/* Gener<span className='text-sky-500 '>AI</span>t */}
            {brandText('GenerAIt')}
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400')}
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