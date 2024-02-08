import Link from 'next/link'
import Layout from "../../components/Layout"
import topics from "../api/topics"

export default function Learn() {
    return(
    <Layout>
    <ul>
        {topics.map(topic => {
           return(
            <li>
                <Link href={`learn/${topic.id}`}>
                   {topic.id}
                </Link>
           </li>)
        })}
    </ul>
    </Layout>
    )
}

