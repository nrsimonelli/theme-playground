'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { users } from './chat'

export function CardsShare() {
  return (
    <Card>
      <CardHeader className='pb-3'>
        <CardTitle>Share this document</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex space-x-2'>
          <Label htmlFor='link' className='sr-only'>
            Link
          </Label>
          <Input
            id='link'
            value='http://example.com/link/to/document'
            readOnly
          />
          <Button variant='secondary' className='shrink-0'>
            Copy Link
          </Button>
        </div>
        <Separator className='my-4' />
        <div className='space-y-4'>
          <h4 className='text-sm font-medium'>People with access</h4>
          <div className='grid gap-6'>
            {users.map((user, index) => (
              <div
                key={`user-${index}`}
                className='flex items-center justify-between space-x-4'
              >
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage src={user.avatar} alt='Image' />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-sm font-medium leading-none'>
                      {user.name}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      {user.email}
                    </p>
                  </div>
                </div>
                <Select defaultValue='edit'>
                  <SelectTrigger
                    className='ml-auto w-[110px]'
                    aria-label='Edit'
                  >
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='edit'>Can edit</SelectItem>
                    <SelectItem value='view'>Can view</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
