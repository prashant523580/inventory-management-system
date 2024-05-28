"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ActiveLink({ href, label, icon, className }: { href: string, label: string, icon?: React.ReactNode, className?: string }) {
    // const router = useRouter();
    const pathname = usePathname();
    // const handleClick = (e: any) => {
    //     e.preventDefault()
    //     router.push(href)
    // }
    return (
        <Link role="link" aria-label={label} href={href as string} className={`${pathname === href ? "  border-blue-600 " : " hover:border-blue-500  "} border-b-2  transition-all  flex items-center space-x-2 py-1 ${className}`}>
            {icon && icon}
            <span>{label}</span>
        </Link>
    )
}

export default ActiveLink