"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar"
import { Button } from "./ui/button"




const MobileSidebar = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar/>
      </SheetContent>
    </Sheet>
    )
}

export default MobileSidebar;