import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className="inline-flex animate-slide-down-fade items-center rounded-md bg-neutral-100 p-2 transition  dark:bg-neutral-900"
    {...props}
  >
    <TooltipPrimitive.Arrow className="fill-current text-neutral-100 dark:text-neutral-900" />
    <span className="block text-xs leading-none text-neutral-700 dark:text-neutral-100">
      {props.children}
    </span>
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
