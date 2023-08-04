import {
    ArrowRight,
    Code,
    ImageIcon,
    MessageSquare,
    Music,
    VideoIcon,
  } from 'lucide-react';

export const featureList = [
    {
      label: 'Conversaition',
      icon: MessageSquare,
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      href: '/conversation',
    },
  
    {
      label: 'Image Generaition',
      icon: ImageIcon,
      color: 'text-pink-700',
      bgColor: 'bg-pink-700/10',
      href: '/image',
    },
    {
      label: 'Video Generaition',
      icon: VideoIcon,
      color: 'text-orange-700',
      bgColor: 'bg-orange-700/10',
      href: '/video',
    },
    {
      label: 'Music Generaition',
      icon: Music,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      href: '/music',
    },
    {
      label: 'Code Generaition',
      icon: Code,
      color: 'text-green-700',
      bgColor: 'bg-green-700/10',
      href: '/code',
    },
  ];