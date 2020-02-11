import Link from 'next/link'
import Layout from '../components/layout'

export default function Index() {
    return (
        <Layout>
            <p>Hello Next.js</p>
            <ul>
                <li>
                    <Link href="/blog/[slug]" as="/blog/hello-world">
                        <a>To hello World Blog post</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}