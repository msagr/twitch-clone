import Image from 'next/image';
import { Poppins } from 'next/font/google'; // its part of shadcn
import { cn } from '@/lib/utils';

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const Logo = () => {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <div className='bg-white'>
                <Image 
                    src='/twitch.png'
                    alt='twitch-clone'
                    height='80'
                    width='80'
                />
            </div>
            <div className={cn(
                'flex flex-col items-center',
                font.className,
            )}>
                <p className="text-xl font-semibold">
                    Twitch Clone
                </p>
                <p className="text-sm text-muted-foreground">
                    Let's stream
                </p>
            </div>
        </div>
    )
}