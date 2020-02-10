import Link from 'next/link'

export default function Index() {
    return (
        <div>
            <Link href="/about">
                <a>About Page</a>
            </Link>
            <p>Hey There Next.js</p>
        </div>
    )
}