'use client'

import { ChevronDownIcon } from '@radix-ui/react-icons'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { users } from './chat'

const roles = ['Owner', 'Developer', 'Billing', 'Viewer', 'Admin', 'User']

export function CardsTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        {users.map((user, index) => (
          <div
            key={`teammember-${index}`}
            className='flex items-center justify-between space-x-4'
          >
            <div className='flex items-center space-x-4'>
              <Avatar className='h-8 w-8'>
                <AvatarImage src={user.avatar} alt='Image' />
                <AvatarFallback className='uppercase'>
                  {user.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium leading-none'>{user.name}</p>
                <p className='text-sm text-muted-foreground'>{user.email}</p>
              </div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='outline' size='sm' className='ml-auto'>
                  {roles[index]}{' '}
                  <ChevronDownIcon className='ml-2 h-4 w-4 text-muted-foreground' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='p-0' align='end'>
                <Command>
                  <CommandInput placeholder='Select new role...' />
                  <CommandList>
                    <CommandEmpty>No roles found.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                        <p>Viewer</p>
                        <p className='text-sm text-muted-foreground'>
                          Can view and comment.
                        </p>
                      </CommandItem>
                      <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                        <p>Developer</p>
                        <p className='text-sm text-muted-foreground'>
                          Can view, comment and edit.
                        </p>
                      </CommandItem>
                      <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                        <p>Owner</p>
                        <p className='text-sm text-muted-foreground'>
                          Admin-level access to all resources.
                        </p>
                      </CommandItem>
                      <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                        <p>Billing</p>
                        <p className='text-sm text-muted-foreground'>
                          Can view, comment and manage billing.
                        </p>
                      </CommandItem>
                      <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                        <p>Admin</p>
                        <p className='text-sm text-muted-foreground'>
                          Admin-level access to all resources.
                        </p>
                      </CommandItem>
                      <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                        <p>User</p>
                        <p className='text-sm text-muted-foreground'>
                          Can view, comment and edit.
                        </p>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
