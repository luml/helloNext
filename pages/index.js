import Link from 'next/link'
import Layout from '../components/layout'


const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

export default function Index() {
    return (
        <Layout>
            <h1>My Blogs</h1>
            <ul>
                <PostLink id="Hello-Next.js" />
                <PostLink id="Learn-Next.js-is-awesome" />
                <PostLink id="Deploy-apps-with-Zeit" />
            </ul>
        </Layout>
    )
}