import * as React from "react";
import { Loader2 } from "lucide-react"; // ← use the named export (not Loader2Icon)
import { cn } from "@/lib/utils";

// Proper typing for lucide-react icons (they are forwardRef components)
type SpinnerProps = React.ComponentPropsWithoutRef<typeof Loader2>;

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, ...props }, ref) => {
    return (
      <Loader2
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...props}
      />
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };
