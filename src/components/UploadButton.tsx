"use client";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { FC, useState } from "react";

interface UploadButtonProps {}

const UploadButton: FC<UploadButtonProps> = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) setisOpen(v);
      }}
    >
      <DialogTrigger onClick={() => setisOpen(true)} asChild>
        <Button>Upload Pdf</Button>
      </DialogTrigger>

      <DialogContent>esdfs</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
