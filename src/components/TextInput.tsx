import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="focus-within:ring-2 ring-cyan-300 flex items-center w-full h-12 gap-3 px-3 py-4 bg-gray-800 rounded outline-none">
      {children}
    </div>
  );
}
TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}
TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="placeholder:text-gray-40 flex-1 text-xs text-gray-100 bg-transparent outline-none"
      {...props}
    />
  );
}
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
