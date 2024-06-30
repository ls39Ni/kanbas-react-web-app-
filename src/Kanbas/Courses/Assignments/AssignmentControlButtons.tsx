import GreenCheckmark from "./CheckMark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  editAssignment: (assignmentId: string) => void;
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    deleteAssignment(assignmentId);
    setIsDeleting(false);
  };

  return (
    <div className="float-end">
      <FaPencil
        onClick={() => editAssignment(assignmentId)}
        className="text-primary me-3"
      />
      <FaTrash
        className="text-danger me-2 mb-1"
        data-bs-toggle="modal"
        data-bs-target={`#deleteAssignmentModal-${assignmentId}`}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <div
        className="modal fade"
        id={`deleteAssignmentModal-${assignmentId}`}
        tabIndex={-1}
        aria-labelledby="deleteAssignmentModalLabel"
        aria-hidden="true"
        onClick={() => setIsDeleting(false)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="assignmentModalLabel">
                Delete
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete the assignment?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDelete}
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}