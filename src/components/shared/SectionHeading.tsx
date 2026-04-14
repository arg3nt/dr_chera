import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <Tag className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
        {title}
      </Tag>
      {/* Nautical rope divider — hand-drawn illustration */}
      <img
        src="/rope-divider.png"
        alt=""
        aria-hidden="true"
        className={cn('mt-2 h-8 w-[200px] object-contain', align === 'center' ? 'mx-auto' : '')}
      />
      {subtitle && (
        <p className="mt-2 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
