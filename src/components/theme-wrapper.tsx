'use client'

import { cn } from '@/lib/utils'
import { useConfig } from '@/lib/hooks/use-config'

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useConfig()

  const inlineStyles = Object.fromEntries(
    Object.entries(config.currentTheme.cssVars.light).map(([key, value]) => [
      `--${key}`,
      value,
    ])
  )

  console.log(inlineStyles)

  return (
    <div
      className={cn(
        `theme-${config.theme || defaultTheme}`,
        'w-full',
        className
      )}
      style={
        {
          ...inlineStyles,

          '--radius': `${defaultTheme ? 0.5 : config.radius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
