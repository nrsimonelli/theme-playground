// import '@/registry/themes.css'

import { ThemesTabs } from '@/components/tabs'
import { ThemeCustomizer } from '@/components/theme-customizer'
import { ThemeWrapper } from '@/components/theme-wrapper'

export default function Home() {
  return (
    <main>
      {/* begin */}
      <div className='container'>
        {/* theme wrapper */}
        <ThemeWrapper
          defaultTheme='zinc'
          className='relative flex w-full flex-col items-start md:flex-row'
        >
          <section className='mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10 w-full'>
            <h1 className='hidden md:block text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
              Add colors. Make it yours.
            </h1>
            <h1 className='md:hidden text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
              Make it yours
            </h1>
            <p className='text-balance max-w-2xl text-lg font-light text-foreground'>
              Hand-picked themes that you can copy and paste into your apps.
            </p>
            <div className='flex w-full items-center justify-start gap-2 py-2'>
              <ThemeCustomizer />
            </div>
          </section>
        </ThemeWrapper>
        <ThemesTabs />
      </div>
      {/* end */}
    </main>
  )
}
