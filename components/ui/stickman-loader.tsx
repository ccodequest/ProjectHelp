import React from 'react';

import { cn } from '@/lib/utils';

type StickmanLoaderProps = {
  className?: string;
  size?: number;
  label?: string;
};

function StickmanLoader({ className, size, label = 'Loading' }: StickmanLoaderProps) {
  const style = size
    ? ({ ['--stickman-size' as keyof React.CSSProperties]: `${size}px` } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={cn('stickman-loader', className)}
      style={style}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className="stickman-head" />
      <span className="stickman-body" />
      <span className="stickman-arm stickman-arm-left" />
      <span className="stickman-arm stickman-arm-right" />
      <span className="stickman-leg stickman-leg-left" />
      <span className="stickman-leg stickman-leg-right" />
    </div>
  );
}

export { StickmanLoader };
