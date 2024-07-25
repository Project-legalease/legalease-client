import AppointmentPreview from "./appointment-preview";
import ProfileOverview from "./profile-overview";

export default function DashboardContent(): React.JSX.Element {
  return (
    <div>
          <ProfileOverview />
          <AppointmentPreview />
    </div>
  );
}
