import {useRouter} from 'next/router'
import Layout from '../components/layout'

const Page = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the blog content.</p>
        </Layout>
    )
}

export default Page;