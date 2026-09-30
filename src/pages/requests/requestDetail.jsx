import { useState } from "react";

import RequestDetailComponent from "../../components/requests/RequestDetail";
import RequestAction from "../../components/requests/RequestAction";

function RequestDetail() {
  const [request] = useState(null);
  const [action, setAction] = useState(null);

  const handleApprove = () => {
    setAction("approve");
  };

  const handleReject = () => {
    setAction("reject");
  };

  const handleConfirm = (data) => {
    console.log(action, data);
    setAction(null);
  };

  return (
    <>
      <RequestDetailComponent
        isOpen={Boolean(request)}
        onClose={() => {}}
        request={request}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      <RequestAction
        isOpen={Boolean(action)}
        onClose={() => setAction(null)}
        request={request}
        action={action}
        loading={false}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default RequestDetail;