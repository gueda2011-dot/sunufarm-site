import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  dark?: boolean;
};

export default function BrandLogo({ compact = false, dark = false }: BrandLogoProps) {
  const frame = compact
    ? "h-[52px] w-[170px]"
    : "h-[62px] w-[200px]";

  return (
    <Link href="/" className="inline-flex items-center">
      <span
        className={`relative overflow-hidden ${frame} ${
          dark ? "rounded-xl bg-white px-1 py-1" : ""
        }`}
      >
        <Image
          src="/logo-sunufarm.png"
          alt="SunuFarm"
          fill
          priority
          sizes={compact ? "170px" : "200px"}
          className="object-cover object-center scale-[1.9]"
        />
      </span>
    </Link>
  );
}
