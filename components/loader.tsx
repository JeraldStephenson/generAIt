import { brandText } from "@/lib/utils"
import Image from "next/image"

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            {/* Add logo image or a loading image that we can animate to spin or some other loading effect */}
            <div className="w-10 h-10 relative animate-spin">
                {/* <Image
                alt="logo"
                fill
                src='/logo.png'
                /> */}
            </div>
            <p className="text-sm text-muted-foreground">
                    {brandText('Generaiting...')}
                </p>
        </div>
    )
}