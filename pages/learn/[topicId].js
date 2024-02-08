import { useRouter } from "next/router"
import topics from "../api/topics"
import Layout from "@/components/Layout"

export default function Learn() {
    const  router = useRouter() // get the  router
    const { topicId } = router.query // apply topicId to the router
    const topic = topics.find(topic => topic.id === topicId) // loop the topics.js at [topicId].js
    const n = topic?.id; // get the id
    const a = topic?.about; // get the about

    
    return(
        <Layout>
        <a onClick={() => router.back()}>Back</a>
        
        <h2>Learn: {n?.toUpperCase()}</h2>
         <p>Why? because 
            {a}
             </p>
    </Layout>
    )
}




