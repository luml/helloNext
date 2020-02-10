import Link from 'next/link'

export default function Index() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/blog/[slug]" as="/blog/hello-world">
                        <a>To hello World Blog post</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}