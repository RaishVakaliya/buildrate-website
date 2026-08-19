"use client";

import * as React from "react";
import { motion, isMotionComponent, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  "ref"
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  children?: React.ReactNode;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

const motionCache = new Map<React.ElementType, React.ComponentType<AnyProps>>();

function getMotionComponent(
  type: React.ElementType,
): React.ComponentType<AnyProps> {
  if (
    typeof type === "object" &&
    type !== null &&
    isMotionComponent(type as React.ElementType)
  ) {
    return type as React.ComponentType<AnyProps>;
  }
  if (typeof type === "string") {
    return (
      (motion as unknown as Record<string, React.ComponentType<AnyProps>>)[
        type
      ] || motion.div
    );
  }
  const cached = motionCache.get(type);
  if (cached) {
    return cached;
  }
  try {
    const comp = motion.create(type) as React.ComponentType<AnyProps>;
    motionCache.set(type, comp);
    return comp;
  } catch {
    return motion.div;
  }
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  if (!React.isValidElement(children)) return null;

  const { ref: childRef, ...childProps } = (children.props || {}) as AnyProps;
  const mergedProps = mergeProps(childProps, props);
  const Base = getMotionComponent(children.type as React.ElementType);

  return (
    <Base {...mergedProps} ref={mergeRefs(childRef as React.Ref<T>, ref)} />
  );
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};
