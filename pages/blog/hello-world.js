import Link from "next/link";

export default function Hello() {
    return (
        <div>
            <Link href="/">
                <a>Home Page</a>
            </Link>
            <p>Hello...</p>
        </div>
    )
}