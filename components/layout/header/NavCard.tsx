import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NavCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

export default function NavCard({
  title,
  description,
  href,
  icon: Icon,
}: NavCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-transform duration-300 group-hover:scale-110">
        <Icon size={22} />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900">
            {title}
          </h4>

          <ArrowRight
            size={18}
            className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
          />
        </div>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>
    </Link>
  );
}