import React from "react";

function SubscribeModal() {
  return (
    <>
      <div
        className="modal fade searchModal"
        id="searchModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search here...."
              />
              <button type="submit">
                <i className="fi fi-rr-search" />
              </button>
            </form>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ri-close-line" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeModal;
