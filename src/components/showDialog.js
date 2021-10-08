import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export function ConfirmDialogAction({onComplete}) {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    return {
      label: 'Show confirm',
      onHandle: () => {
        setDialogOpen(true)
      },
      dialog: dialogOpen && {
        type: 'modal',
        onClose: onComplete,
        content: <div>
          <h3>👋 ... and I'm a modal</h3>
          <img src="https://source.unsplash.com/1600x900/?cat" style={{width: '100%'}}/>
          <p>
            I'm suitable for longer and more diverse forms of content.
          </p>
        </div>
      }
    }
  }