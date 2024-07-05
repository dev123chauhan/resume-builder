import EditableResume from "./EditResume";
import Sidebar from "./Sidebar";
export default function Dashboard() {
  return (
    <div>
      <div style={{display:"flex"}}>
        <Sidebar  />
        <EditableResume/>
      </div>
    </div>
  );
}
