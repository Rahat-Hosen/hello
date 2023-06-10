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
    className="inline-flex animate-slide-down-fade items-center rounded-md bg-gray-100 px-4 py-2 dark:bg-gray-800"
    {...props}
  >
    <TooltipPrimitive.Arrow className="fill-current text-gray-100 dark:text-gray-800" />
    <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
      {props.children}
    </span>
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
