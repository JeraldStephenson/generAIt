import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Source_Code_Pro } from 'next/font/google';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const sourceCodeProFont = Source_Code_Pro({
  weight: '600',
  subsets: ['latin'],
});

// applies branding to any string that contains 'ai'
const brandText = (text: string) => {
  const pattern = /ai/gi;
  let beforeAI = '';
  let afterAI = '';

  const match = pattern.exec(text);
  if (match) {
    beforeAI = text.slice(0, match.index);
    afterAI = text.slice(match.index + match[0].length);

    return (
      <span className='group'>
        {beforeAI}
        <span
          className={cn(
            'text-sky-500  group-hover:text-sky-400',
            sourceCodeProFont.className
          )}
        >
          AI
        </span>
        {afterAI}
      </span>
    );
  }
  return text;
};

function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export { cn, brandText, absoluteUrl };
