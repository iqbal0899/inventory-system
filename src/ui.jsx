import { cn } from './utils.js'

const buttonVariants = {
  primary: 'bg-[#174276] text-white hover:bg-[#12365f] active:bg-[#0e2e53]',
  secondary: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 active:bg-slate-100',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  danger: 'text-rose-700 hover:bg-rose-50',
}

export function Button({
  children,
  className,
  variant = 'secondary',
  size = 'default',
  type = 'button',
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3.5 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
        size === 'icon' && 'size-11 shrink-0 p-0',
        buttonVariants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export function Card({ children, className, ...props }) {
  return (
    <section
      className={cn('rounded-lg border border-slate-200 bg-white', className)}
      {...props}
    >
      {children}
    </section>
  )
}

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-500',
        className,
      )}
      {...props}
    />
  )
}

export function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        'h-11 min-w-0 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-700',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export function FieldLabel({ children, htmlFor, className }) {
  return (
    <label
      className={cn('mb-1.5 block text-sm font-medium text-slate-700', className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}