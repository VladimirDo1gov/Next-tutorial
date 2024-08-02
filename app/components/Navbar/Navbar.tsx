"use client";

import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav>
            <Link href={"/"} className={clsx("navbar-item", { "active-navlink": pathname === "/" })}>
                Home
            </Link>
            <Link href={"/dashboard/customers"} className={clsx("navbar-item", { "active-navlink": pathname === "/dashboard/customers" })}>
                Customers
            </Link>
            <Link href={"/dashboard/invoices"} className={clsx("navbar-item", { "active-navlink": pathname === "/dashboard/invoices" })}>
                Invoices
            </Link>
        </nav>
    );
}
