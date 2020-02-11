import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'


const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1,
            a {
                font-family: 'Arial';
            }

            ul {
                padding: 0 20px;
            }

            li {
                margin: 10px 0;
            }

            a {
                color: deepPink;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;