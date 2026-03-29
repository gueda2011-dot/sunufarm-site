import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  dark?: boolean;
};

export default function BrandLogo({ compact = false, dark = false }: BrandLogoProps) {
  const iconSize = compact ? 40 : 48;
  const textSize = compact ? "text-[2rem]" : "text-[2.2rem]";

  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <Image
        src="/logo-sunufarm-icon.png"
        alt="Icône SunuFarm"
        width={iconSize}
        height={iconSize}
        className="h-auto w-auto rounded-md"
        priority
      />
      <span
        className={`${textSize} font-black italic leading-none tracking-tight ${
          dark ? "text-white" : "text-[#241f23]"
        }`}
      >
        SunuFarm
      </span>
    </Link>
  );
}
