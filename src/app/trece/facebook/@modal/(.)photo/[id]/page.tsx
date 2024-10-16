import { Modal } from './modal';

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  console.log("render modal");
  return <Modal>{photoId}</Modal>;
}