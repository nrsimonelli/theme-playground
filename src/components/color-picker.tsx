'use client'

import { Slider } from '@/components/ui/slider'
import { useConfig } from '@/lib/hooks/use-config'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ColorPicker = ({ selectedToken }: { selectedToken: string }) => {
  const [config, setConfig] = useConfig()
  const { theme: mode } = useTheme()

  const activeMode = mode === 'dark' ? 'dark' : 'light'

  const [hsl, setHsl] = useState(() => ({
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
  }))

  useEffect(() => {
    if (selectedToken) {
      const [hue, saturation, lightness] =
        config.currentTheme.cssVars[activeMode][selectedToken].split(' ')
      setHsl({
        hue: parseInt(hue),
        saturation: parseInt(saturation.replace('%', '')),
        lightness: parseInt(lightness.replace('%', '')),
      })
    }
  }, [selectedToken, activeMode, config.currentTheme.cssVars])

  const handleSliderCommit = () => {
    const currentColor = `${hsl.hue} ${hsl.saturation}% ${hsl.lightness}%`

    setConfig({
      ...config,
      currentTheme: {
        ...config.currentTheme,
        name: 'custom',
        label: 'Custom',
        activeColor: {
          light:
            selectedToken === 'primary'
              ? currentColor
              : config.currentTheme.activeColor.light,
          dark:
            selectedToken === 'primary'
              ? currentColor
              : config.currentTheme.activeColor.dark,
        },
        cssVars: {
          ...config.currentTheme.cssVars,
          [activeMode]: {
            ...config.currentTheme.cssVars[activeMode],
            [selectedToken]: currentColor,
            ring:
              selectedToken === 'primary'
                ? currentColor
                : config.currentTheme.cssVars[activeMode].ring,
          },
        },
      },
    })
  }

  return (
    <div className='flex flex-row space-x-4'>
      <div className='flex flex-1'>
        <div
          style={{
            background: `hsl(${hsl.hue}deg ${hsl.saturation}% ${hsl.lightness}%)`,
          }}
          className={'h-full w-full rounded-lg shadow-md'}
        ></div>
      </div>
      <div className='flex flex-1 flex-col space-y-2 py-2 justify-center items-center'>
        <div className={'space-y-2 w-full'}>
          <div className='inline-flex justify-between w-full'>
            <p>Hue</p>
            <p>{hsl.hue}</p>
          </div>
          <Slider
            max={360}
            step={0.1}
            value={[hsl.hue]}
            onValueChange={([val]) => setHsl({ ...hsl, hue: val })}
            onValueCommit={handleSliderCommit}
          />
        </div>
        <div className={'space-y-2 w-full'}>
          <div className='inline-flex justify-between w-full'>
            <p>Saturation</p>
            <p>{hsl.saturation}</p>
          </div>
          <Slider
            max={100}
            step={0.1}
            value={[hsl.saturation]}
            onValueChange={([val]) => setHsl({ ...hsl, saturation: val })}
            onValueCommit={handleSliderCommit}
          />
        </div>
        <div className={'space-y-2 w-full'}>
          <div className='inline-flex justify-between w-full'>
            <p>Lightness</p>
            <p>{hsl.lightness}</p>
          </div>
          <Slider
            max={100}
            step={0.1}
            value={[hsl.lightness]}
            onValueChange={([val]) => setHsl({ ...hsl, lightness: val })}
            onValueCommit={handleSliderCommit}
          />
        </div>
      </div>
    </div>
  )
}
