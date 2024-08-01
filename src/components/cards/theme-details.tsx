'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useConfig } from '@/lib/hooks/use-config'
import { ColorPicker } from '../color-picker'

export function CardsThemeDetails() {
  const [config] = useConfig()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Details</CardTitle>
        <CardDescription>Details about your current theme.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        <ColorPicker />

        <pre className='max-h-[300px] overflow-y-scroll'>
          {JSON.stringify(config, undefined, 2)}
        </pre>
        <div className='rounded-lg shadow-sm ring-1 ring-border'>
          <div className='flex items-center p-2 pb-0'>
            <div className='flex-1 pl-1 text-sm font-medium'>
              <h2 className='capitalize'>Primary</h2>
            </div>
          </div>
          <div className='flex flex-col gap-1 p-2 sm:flex-row sm:gap-2'></div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Continue</Button>
      </CardFooter>
    </Card>
  )
}
