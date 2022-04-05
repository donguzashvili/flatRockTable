import { useEffect } from "react";
import AvatarSection from "./AvatarSection";
import DetailsSection from "./DetailsSection";
import PermissionSection from "./PermissionsSection";

import "./user.css";

export default function UserSetup({
  data,
  permissions,
  updateStatus,
  setRoute,
  updateUser,
}) {
  //to render parent and renew data
  useEffect(() => {
    setRoute("user");
  }, [setRoute]);

  return (
    <div className="userContentWrapper">
      <div className="userSections">
        <AvatarSection data={data} status={data?.status} />
        <div className="detailsSection">
          <DetailsSection
            data={data}
            status={data?.status}
            updateStatus={updateStatus}
            updateUser={updateUser}
          />
        </div>
        <div className="PermissionsSection">
          <PermissionSection
            data={data}
            permissions={permissions}
            dataStatus={data?.status}
          />
        </div>
      </div>
    </div>
  );
}
