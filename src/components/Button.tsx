import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactNode;
}

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black hover:bg-cyan-300 text-sm w-full transition-colors focus:ring-2 ring-white',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
