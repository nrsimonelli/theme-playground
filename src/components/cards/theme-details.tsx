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

  const data = [
    'primary',
    'secondary',
    'accent',
    'background',
    'foreground',
    'card',
    'muted',
    'destructive',
  ]

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
        <div className='flex flex-wrap gap-y-4'>
          {data.map((color) => (
            <div
              key={color}
              className='flex flex-1 flex-col items-center space-y-2 basis-28 shrink-0'
            >
              <div
                className={`rounded-full h-20 w-20 flex items-center justify-center bg-${color} text-${color}-foreground shadow-lg`}
              >
                <p className='capitalize text-2xl font-bold'>
                  {color.slice(0, 1)}
                </p>
              </div>
              <p className='capitalize text-sm font-medium'>{color}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Continue</Button>
      </CardFooter>
    </Card>
  )
}
