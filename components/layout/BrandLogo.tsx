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
        src="/logo-sunufarm.png"
        alt="SunuFarm"
        width={compact ? 168 : 196}
        height={compact ? 56 : 66}
        className={`h-auto w-auto ${dark ? "rounded-xl bg-white px-2 py-1" : ""}`}
        priority
      />
    </Link>
  );
}
