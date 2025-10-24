declare module 'react-scroll' {
  import { ComponentType, ReactNode } from 'react';

  export interface LinkProps {
    to: string;
    smooth?: boolean | string;
    duration?: number;
    delay?: number;
    spy?: boolean;
    offset?: number;
    children?: ReactNode;
    className?: string;
    activeClass?: string;
    spyThrottle?: number;
    hashSpy?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    isDynamic?: boolean;
    onClick?: () => void;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<{ name: string; children?: ReactNode; className?: string }>;
  export const Events: {
    scrollEvent: {
      register: (name: string, callback: () => void) => void;
      remove: (name: string) => void;
    };
    scrollSpy: {
      register: (name: string, callback: () => void) => void;
      remove: (name: string) => void;
    };
  };
  export const scrollSpy: {
    update: () => void;
  };
  export const scroller: {
    scrollTo: (element: string, options?: any) => void;
  };
  export const animateScroll: {
    scrollTo: (y: number, options?: any) => void;
    scrollMore: (deltaY: number, options?: any) => void;
  };
}
