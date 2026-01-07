/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        ar?: boolean;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "disable-zoom"?: boolean;
        loading?: "auto" | "lazy" | "eager";
        exposure?: string | number;
        "environment-image"?: string;
        "shadow-intensity"?: string | number;
      };
    }
  }
}

export {};
