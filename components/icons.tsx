import type { SVGProps } from "react";

/**
 * Minimal, geometric line icons — 1.25px stroke on a 24px grid.
 * Deliberately restrained: no cartoon mascots, no filled illustrations.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- Service icons ------------------------------------------------------- */

export function GaugeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 18a8.5 8.5 0 1 1 17 0" />
      <path d="M12 18l4.2-5" />
      <circle cx="12" cy="18" r="1.1" fill="currentColor" stroke="none" />
      <path d="M5.6 10.4l1.6 1.1M18.4 10.4l-1.6 1.1" />
    </Icon>
  );
}

export function BrakeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="12" r="7" />
      <circle cx="11" cy="12" r="2.25" />
      <path d="M20.2 8.6v6.8" />
      <path d="M22 10.2v3.6" />
      <circle cx="11" cy="6.6" r=".7" fill="currentColor" stroke="none" />
      <circle cx="11" cy="17.4" r=".7" fill="currentColor" stroke="none" />
      <circle cx="5.4" cy="12" r=".7" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function DiagnosticsIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 12h-3.5l-2.6 7.5L10 4.5 7.3 12H2" />
    </Icon>
  );
}

export function EngineIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.25" y="8" width="17.5" height="10.5" rx="2" />
      <path d="M7 8V5.5M12 8V5.5M17 8V5.5" />
      <path d="M3.25 13.25h17.5" />
      <circle cx="8.5" cy="16" r="1.15" />
      <circle cx="15.5" cy="16" r="1.15" />
    </Icon>
  );
}

export function ElectricalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13.2 2.5 4.5 13.4h6.1l-1.3 8.1 8.7-10.9h-6.1z" />
    </Icon>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </Icon>
  );
}

/* --- UI icons ------------------------------------------------------------ */

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="2.75" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 12h15M13 5.5l6.5 6.5L13 18.5" />
    </Icon>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19.5 12h-15M11 5.5 4.5 12 11 18.5" />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.25 2" />
    </Icon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </Icon>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21 14.5a2.5 2.5 0 0 1-2.5 2.5H8l-4.5 4V5.5A2.5 2.5 0 0 1 6 3h12.5A2.5 2.5 0 0 1 21 5.5z" />
      <path d="M8.5 8.5h7M8.5 12h4.5" />
    </Icon>
  );
}

export function ClipboardCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15" />
      <rect x="9" y="2.75" width="6" height="3.5" rx="1" />
      <path d="m9 12.5 2 2 4-4.25" />
    </Icon>
  );
}

export function StarIcon({ fill = "currentColor", ...props }: IconProps & { fill?: string }) {
  return (
    <Icon fill={fill} stroke="none" {...props}>
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.45 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95z" />
    </Icon>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 5.5C6.5 7 5 9.5 5 13v5.5h5.5V13H8c0-2.2.8-3.7 2.6-4.8zM19 5.5c-3 1.5-4.5 4-4.5 7.5v5.5H20V13h-2.5c0-2.2.8-3.7 2.6-4.8z" />
    </Icon>
  );
}
