import { JobDetails } from "../(components)/JobDetail"

export default function JobPage({ params }) 
{
  return <JobDetails jobId={params.id} />
}
