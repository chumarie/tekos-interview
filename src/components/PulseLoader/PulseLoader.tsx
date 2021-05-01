import React from "react";
import { Modal, Box } from "@material-ui/core";

import { PulseLoader } from "react-spinners";

export default function PulseModal() {
  return (
    <Modal open>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <PulseLoader color="#fff" loading />
      </Box>
    </Modal>
  );
}
