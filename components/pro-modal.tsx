'use client';

import { Check, Zap } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

import { featureList } from '@/lib/features-list-styles';
import { useProModal } from '@/hooks/use-pro-modal';
import { brandText, cn } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error, 'STRIPE_CLIENT_ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className='bg-indigo-300/20'>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold py-1'>
              <p> Upgrade to {brandText('Generait')} Unlimited</p>
              <Badge variant={'premium'} className='uppercase text-sm py-1 '>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
            {featureList.map((feature) => (
              <Card
                key={feature.label}
                className='p-3 border-black/5 flex items-center justify-between'
              >
                <div className='flex items-center gap-x-4'>
                  <div className={cn('p-2 w-fit rounded-md', feature.bgColor)}>
                    <feature.icon className={cn('w-6 h-6', feature.color)} />
                  </div>
                  <div className='font-semibold text-sm'>{feature.label}</div>
                </div>
                <Check className='text-primary w-5 h-5' />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size='lg'
            variant='premium'
            className='w-full'
          >
            Upgrade
            <Zap className='w-4 h-4 mt-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
