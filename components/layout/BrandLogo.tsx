import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  dark?: boolean;
};

export default function BrandLogo({ compact = false, dark = false }: BrandLogoProps) {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/sunufarm-logo.svg"
        alt="SunuFarm"
        width={compact ? 138 : 168}
        height={compact ? 34 : 42}
        className={`h-auto ${dark ? "brightness-0 invert" : ""}`}
        priority
      />
    </Link>
  );
}
