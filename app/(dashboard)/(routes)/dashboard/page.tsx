'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Card } from '@/components/ui/card';
import { cn, brandText } from '@/lib/utils';
import { featureList } from '@/lib/features-list-styles';


export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Explore the power of AI
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Leverage the power of AI to increase productivity
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {featureList.map((feature) => (
          <Card
            key={feature.href}
            onClick={() => router.push(feature.href)}
            className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer bg-[#111827]/5'
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', feature.bgColor)}>
                <feature.icon className={cn('w-8 h-8', feature.color)} />
              </div>
              <div className='font-semibold'>{brandText(feature.label)}</div>
            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        ))}
      </div>
    </div>
  );
}
