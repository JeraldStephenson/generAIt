'use client'

import {
    Dialog, 
    DialogContent,
    DialogHeader,
    DialogTitle
 } from "@/components/ui/dialog"
import { useProModal } from "@/hooks/use-pro-modal"
import { brandText } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export const ProModal = () => {
    const proModal = useProModal()

    return (
       <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                <div className="flex items-center gap-x-2 font-bold py-1">
                   <p className="tracking-wide"> Upgrade to {brandText('Generait')} Unlimited</p>
                   <Badge variant={'premium'} className="uppercase text-sm py-1 ">
                    pro
                   </Badge>
                </div>
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
       </Dialog>
    )
}

