import Image from 'next/image';

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className='h-full p-20 flex flex-col items-center justify-center '>
      <div className='relative h-96 w-96 group'>
        <Image alt='Empty' fill src='/generaitRobot2.png' />
        <p className='text-xs text-slate-300 text-muted-foreground tracking-tighter relative inset-x-20 inset-y-80 invisible group-hover:visible'>
          Photo by{' '}
          <a href='https://unsplash.com/@coopery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Mohamed Nohassi
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/photos/-0xMiYQmk8g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Unsplash
          </a>
        </p>
      </div>

      <p className='text-muted-foreground text-sm text-center'>{label}</p>
    </div>
  );
};
