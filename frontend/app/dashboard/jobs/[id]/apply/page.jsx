import { JobApplication } from "../../(components)/jobApplication"



export default function JobApplicationPage({ params }) {
  return <JobApplication jobId={params.id} />
}
