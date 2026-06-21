/**
 * 1st Choice — official brand logo (public/logo.png), rendered with next/image.
 * Size it with the `className` (set a height, leave width auto), e.g. "h-14 w-auto".
 */
import Image from "next/image";
import logo from "../../public/logo.png";

type LogoProps = {
  className?: string;
  title?: string;
  priority?: boolean;
};

export default function Logo({
  className,
  title = "1st Choice Ice Machine Repair",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={logo}
      alt={title}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 160px, 320px"
    />
  );
}
