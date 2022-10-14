import { Check } from 'phosphor-react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxRadix.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckboxRadix.CheckboxIndicator asChild>
        <Check weight="bold" className="text-cyan-500 w-5 h-5" />
      </CheckboxRadix.CheckboxIndicator>
    </CheckboxRadix.Root>
  );
}
