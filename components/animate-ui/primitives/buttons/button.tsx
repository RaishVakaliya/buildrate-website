'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { Slot } from '@/components/animate-ui/primitives/animate/slot';

type BaseButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
  hoverScale?: number;
  tapScale?: number;
  children?: React.ReactNode;
};

type ButtonProps =
  | (BaseButtonProps & { asChild: true; children: React.ReactElement })
  | (BaseButtonProps & { asChild?: false; children?: React.ReactNode });

function Button({
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <Slot
        whileTap={{ scale: tapScale }}
        whileHover={{ scale: hoverScale }}
        {...props}
      />
    );
  }

  return (
    <motion.button
      whileTap={{ scale: tapScale }}
      whileHover={{ scale: hoverScale }}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
