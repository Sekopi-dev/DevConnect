import { AdminView } from "../../(components)/AdminView"


export default function JobDetails({ params }) {
  return <AdminView jobId={params.id} />
}
